"use client";
import React from "react";
import { sidebarList } from "@/lib/constant";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const Sidebar_content = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <>
      <div className="flex justify-center items-start py-10 w-full h-full relative">
        <p
          className="absolute text-white left-5 hover:underline hover:cursor-pointer"
          onClick={() => {
            form.reset();
          }}
        >
          clear
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <div className=" grid gap-2 py-4 pt-6 ">
                    {sidebarList.map((parentItem, index) => {
                      return (
                        <div
                          className="flex flex-col  gap-4 w-full items-center py-2 text-lg font-semibold bg-transparent text-white"
                          key={`sidebarItems${index}`}
                        >
                          <div className="flex justify-center items-center gap-2">
                            {parentItem.label}
                            <ArrowRight size={18} />
                          </div>
                          {
                            <div className="flex flex-col gap-2">
                              {parentItem.filter.map((childItem) => (
                                <FormField
                                  key={childItem.id}
                                  control={form.control}
                                  name="items"
                                  render={({ field }) => {
                                    return (
                                      <FormItem
                                        key={`${parentItem.label}${childItem.id}`}
                                        className="flex flex-row items-start space-x-3 space-y-0"
                                      >
                                        <FormControl>
                                          <Checkbox
                                            className="border-white"
                                            checked={field.value?.includes(
                                              `${parentItem.label}${childItem.id}`
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...field.value,
                                                    `${parentItem.label}${childItem.id}`,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !==
                                                        `${parentItem.label}${childItem.id}`
                                                    )
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-sm font-normal">
                                          {childItem.label}
                                        </FormLabel>
                                      </FormItem>
                                    );
                                  }}
                                />
                              ))}
                            </div>
                          }
                        </div>
                      );
                    })}
                  </div>
                </FormItem>
              )}
            />
            <div className="w-full flex justify-center items-center ">
              <Button type="submit">Filter</Button>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Sidebar_content;
