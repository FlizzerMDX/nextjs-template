"use client"

import { Lottie, LottieDisplay } from "lottie-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const t = useTranslations('HomePage');
  const iam = useTranslations('HomePage.iam');
  return (
    <div className="flex gap-2">
      <div className="w-full mx-auto text-left text-2xl">
        <div>
          Hello There ! My name is FlizzerMDX
        </div>
        {iam("begin")}
        <Typewriter words={[iam("developer"), iam("gamer"), iam("javascript")]} cursor cursorColor="white" cursorStyle="▌" loop />
      </div>
      <Lottie src="/rick.json" autoplay loop>
        <LottieDisplay/>
      </Lottie>
    </div>
  );
}
