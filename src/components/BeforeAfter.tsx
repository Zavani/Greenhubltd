import React, { useMemo, useState } from 'react';
import { Slider } from '@/components/ui/slider';
import beforeImage from '@/assets/dirty.png';
import afterImage from '@/assets/clean.png';
import SectionHeader from './SectionHeader';

const BeforeAfter = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const afterImageStyle = useMemo(() => ({
    clipPath: `inset(0 ${100 - sliderValue}% 0 0)`,
  }), [sliderValue]);

  return (
    <section id="before-after" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="See the Difference"
          description="From messy to magnificent. Our results speak for themselves."
        />

        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden select-none">
          {/* After Image (top layer) */}
          <img
            src={afterImage}
            alt="After cleaning"
            className="absolute top-0 left-0 h-full w-full object-cover"
            style={afterImageStyle}
          />
          {/* Before Image (bottom layer) */}
          <img
            src={beforeImage}
            alt="Before cleaning"
            className="h-full w-full object-cover"
          />
          
          {/* Slider Control */}
          <div className="absolute inset-0 flex items-center">
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              onValueChange={(value) => setSliderValue(value[0])}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
