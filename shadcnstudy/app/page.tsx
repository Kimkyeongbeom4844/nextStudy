"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogPortal,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Page() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <header className="container sm:bg-[#4ade80] md:bg-[#7c3aed] lg:bg-[#9d174d] xl:bg-[#fcd34d] 2xl:bg-slate-800">
        <Button variant={"myButton"} onClick={() => setShowModal(true)}>
          모달보기
        </Button>
        <p className="text-white">
          {showModal === true ? "모달열림" : "모달닫힘"}
        </p>
        <Button
          variant={"destructive"}
          onClick={(e) => {
            setCount(count + 1);
          }}
        >
          카운트 : {count}
        </Button>
      </header>
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>

      <AlertDialog open={showModal} onOpenChange={setShowModal}>
        <AlertDialogOverlay className="bg-[#555]/10" />
        <AlertDialogContent
          className="p-0 gap-y-0 flex flex-col"
          onOpenAutoFocus={() => console.log("열림")}
          onCloseAutoFocus={() => console.log("닫힘")}
        >
          <h1>ㅎㅇㅎㅇㅎ</h1>
          <Button
            variant={"myButton"}
            className="self-center p-4 rounded-[5px]"
            onClick={() => setShowModal(false)}
          >
            닫기
          </Button>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
