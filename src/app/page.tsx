"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen overflow-hidden relative">
      <Suspense fallback={null}>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            animation: 'fadeIn 4s ease-in-out forwards',
          }}
        >
          <ShaderGradient
            control="query"
            urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%238b7ec8&color2=%23a02f6f&color3=%23ce5d97&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false'
          />
        </ShaderGradientCanvas>
      <div className="p-4 md:p-10 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto min-h-[80vh] auto-rows-min md:grid-rows-3">
        {/* メインプロフィール - 大きなカード */}
        <div className="md:col-span-2 md:row-span-2 backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-6 md:p-8 flex flex-col justify-center items-center text-center order-1">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 mb-4 md:mb-6 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
            R
          </div>
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-3 md:mb-4">Ryu Takahashi</h1>
          <p className="text-gray-300 text-base md:text-lg mb-3 md:mb-4">フルスタック開発者</p>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
            Web開発、モバイルアプリ、システム設計に従事。
            最新技術への探求心と創造性を持って
            ユーザー体験の向上に取り組んでいます。
          </p>
        </div>

        {/* スキル */}
        <div className="backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-4 md:p-6 order-2">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">💻 スキル</h3>
          <div className="space-y-1.5 md:space-y-2">
            <div className="text-gray-300 text-xs md:text-sm">React / Next.js</div>
            <div className="text-gray-300 text-xs md:text-sm">Node.js / Express</div>
            <div className="text-gray-300 text-xs md:text-sm">TypeScript</div>
            <div className="text-gray-300 text-xs md:text-sm">PostgreSQL</div>
          </div>
        </div>

        {/* 経験年数 */}
        <div className="backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-4 md:p-6 flex flex-col justify-center items-center order-3">
          <div className="text-white text-3xl md:text-4xl font-bold mb-1 md:mb-2">5+</div>
          <div className="text-gray-400 text-xs md:text-sm text-center">年の開発経験</div>
        </div>

        {/* プロジェクト */}
        <div className="md:col-span-2 backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-4 md:p-6 order-5 md:order-4">
          <h3 className="text-white text-lg md:text-xl font-semibold mb-3 md:mb-4">🚀 最近のプロジェクト</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="bg-gray-800/50 rounded-xl p-3 md:p-4">
              <h4 className="text-white font-medium mb-1 md:mb-2 text-sm md:text-base">Eコマースサイト</h4>
              <p className="text-gray-400 text-xs">Next.js, Stripe決済統合</p>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-3 md:p-4">
              <h4 className="text-white font-medium mb-1 md:mb-2 text-sm md:text-base">ダッシュボード</h4>
              <p className="text-gray-400 text-xs">React, D3.js データ可視化</p>
            </div>
          </div>
        </div>

        {/* 連絡先 */}
        <div className="backdrop-blur-lg bg-gray-900/20 rounded-3xl border border-gray-700/50 p-4 md:p-6 flex flex-col justify-center items-center order-4 md:order-5">
          <div className="text-xl md:text-2xl mb-2 md:mb-3">📧</div>
          <div className="text-white text-xs md:text-sm font-medium mb-1">お問い合わせ</div>
          <div className="text-gray-400 text-xs">ryu1013.com</div>
        </div>
      </div>
      </Suspense>
    </div>
  );
}
