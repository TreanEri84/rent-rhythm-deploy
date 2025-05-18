import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Input } from "./components/ui/input";
import Navbar from "./components/Navbar";
import ThemeDisplay from "./components/ThemeDisplay";

export default function App() {
  const [rentAmount, setRentAmount] = useState(1200);
  const [amountSaved, setAmountSaved] = useState(0);
  const [bufferFund, setBufferFund] = useState(100);
  const [rewardVisible, setRewardVisible] = useState(false);

  const percentage = Math.min(
    ((amountSaved / (rentAmount + bufferFund)) * 100),
    100
  );

  const handleTopUp = () => {
    setAmountSaved((prev) => prev + 100);
  };

  useEffect(() => {
    if (amountSaved >= rentAmount + bufferFund) {
      setRewardVisible(true);
    }
  }, [amountSaved, rentAmount, bufferFund]);

  // Determine mascot image by progress
  let animalImg = "/squirrel.png";
  if (percentage >= 100) {
    animalImg = "/fox.png";
  } else if (percentage >= 50) {
    animalImg = "/pigeon.png";
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <ThemeDisplay />

      <section className="flex flex-col items-center justify-center px-4 py-6">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <img
                src={animalImg}
                alt="Progress Animal"
                className="w-24 h-24 mb-2"
                data-testid="progress-animal"
              />
            </div>
            <h1 className="text-2xl font-bold text-center">🏠 Rent Rhythm</h1>
            <Progress value={percentage} />
            <div className="text-center">
              <p>Saved: ${amountSaved}</p>
              <p>
                Target: ${rentAmount} + ${bufferFund} buffer
              </p>
            </div>
            <Button onClick={handleTopUp}>Top up $100</Button>
            <Input
              type="number"
              value={rentAmount}
              onChange={(e) => setRentAmount(Number(e.target.value))}
              placeholder="Set Rent Amount"
              min={0}
            />
            <Input
              type="number"
              value={bufferFund}
              onChange={(e) => setBufferFund(Number(e.target.value))}
              placeholder="Set Buffer Amount"
              min={0}
            />
            {rewardVisible && (
              <div className="text-green-500 font-semibold text-center">
                <img
                  src="/fox.png"
                  alt="Reward Fox"
                  className="mx-auto w-24 h-24 animate-bounce"
                />
                🎉 You’ve saved enough for rent + buffer!
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
