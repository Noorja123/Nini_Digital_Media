"use client";

import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";
const [toastOpen, setToastOpen] = useState<boolean>(false);

export default function Settings() {
  const [open, setOpen] = useState<boolean>(false);

  const handleSaveSettings = (): void => {
    // 👉 Your save logic here (localStorage / API call etc.)

    setToastOpen(true); // show snackbar
  };

  return (
    <Toast.Provider swipeDirection="right">

  <button
    onClick={handleSaveSettings}
    className="bg-gradient-to-r from-[#6B46C1] to-[#38B2AC] text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow"
  >
    Save Changes
  </button>

  <Toast.Root
    open={toastOpen}
    onOpenChange={setToastOpen}
    duration={3000}
    className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
  >
    <Toast.Title className="font-medium">
      Changes saved successfully!
    </Toast.Title>
  </Toast.Root>

  {/* THIS CONTROLS POSITION */}
  <Toast.Viewport className="fixed bottom-5 right-5 flex flex-col gap-2 w-96 max-w-full outline-none" />

</Toast.Provider>

  );
}
