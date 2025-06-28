import React, { useState } from 'react';
import EmotionalSimPanel from './components/EmotionalSimPanel';
import EmotionMixer from './components/EmotionMixer';
import FieldVectorHUD from './components/FieldVectorHUD';

export default function App() {
  const [emotionA, setEmotionA] = useState('joy');
  const [emotionB, setEmotionB] = useState('sadness');

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-start p-8 space-y-12">
      <h1 className="text-4xl font-bold">RFM Visual UI</h1>

      {/* NPC Panel */}
      <section className="w-full max-w-4xl text-center space-y-4">
        <h2 className="text-2xl font-semibold">Simulated NPC States</h2>
        <EmotionalSimPanel />
      </section>

      {/* Emotion Mixer + HUD */}
      <section className="w-full max-w-4xl text-center space-y-4">
        <EmotionMixer
          emotionA={emotionA}
          emotionB={emotionB}
          setEmotionA={setEmotionA}
          setEmotionB={setEmotionB}
        />
        <FieldVectorHUD emotionA={emotionA} emotionB={emotionB} />
      </section>
    </div>
  );
}