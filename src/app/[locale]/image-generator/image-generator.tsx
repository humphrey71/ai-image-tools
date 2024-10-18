"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Prediction } from "replicate"

const aspectRatios = [
  "2:3", "3:2", "1:1", "16:9", "21:9", "9:16", "9:21", "4:5", "5:4", "3:4", "4:3"
]

const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required.",
  }),
  aspectRatio: z.string().refine((val) => aspectRatios.includes(val), {
    message: "Please select a valid aspect ratio.",
  }),
  isPublic: z.boolean().default(true),
})

export function ImageGeneratorComponent() {
  const [generatedImageUrl, setGeneratedImageUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      aspectRatio: "1:1",
      isPublic: true,
    },
  })

  const [prediction, setPrediction] = useState<Prediction | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: values.prompt,
      }),
    })
    let prediction = await response.json()
    if (response.status !== 201) {
      setError(prediction.detail)
      return
    }
    setPrediction(prediction)

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      const response = await fetch("/api/predictions/" + prediction.id)
      prediction = await response.json()
      if (response.status !== 200) {
        setError(prediction.detail)
        return
      }
      console.log({ prediction: prediction })
      setPrediction(prediction)
    }
  }

  useEffect(() => {
    console.log(prediction)
    if (prediction?.status === "succeeded") {
      setGeneratedImageUrl(prediction.output[0])
    }
    if (prediction?.status === "failed") {
      setError(prediction?.error as string)
    }
    setIsLoading(prediction?.status === "processing" || prediction?.status === "starting")
  }, [prediction])

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Flux AI Image Generator</CardTitle>
          <p className="text-sm text-muted-foreground">Select a style, type to get your own flux ai image</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prompt</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your Flux.1 AI image, Default: a person"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe the image you want to generate.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="aspectRatio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image Dimensions</FormLabel>
                    <FormDescription>
                      Select the aspect ratio for your image
                    </FormDescription>
                    <div className="grid grid-cols-4 gap-2">
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select aspect ratio" />
                        </SelectTrigger>
                        <SelectContent>
                          {aspectRatios.map((ratio) => (
                            <SelectItem key={ratio} value={ratio}>
                              {ratio}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isPublic"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel htmlFor="isPublic">Display Public</FormLabel>
                      <FormDescription>
                        Free Usage will be public, upgrade to make it private
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        id="isPublic"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Generating..." : "Run (1 Credit)"}
              </Button>
              {error && <FormMessage>{error}</FormMessage>}
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Flux AI Image Generator Result</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Generating image...
            </div>
          ) : generatedImageUrl ? (
            <div className="space-y-4">
              <Image
                src={generatedImageUrl}
                alt="Generated AI Image"
                width={512}
                height={512}
                className="w-full h-auto rounded-lg"
              />
              <Button variant="link">
                <Link href={generatedImageUrl} target="_blank">View Image</Link>
              </Button>
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              Generated image will appear here
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}