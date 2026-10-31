'use client';

interface Step {
  id: number;
  label: string;
}

interface ReservationStepperProps {
  currentStep: number;
  steps: Step[];
}

export function ReservationStepper({ currentStep, steps }: ReservationStepperProps) {
  // Convert 1-based currentStep to 0-based for comparison
  const currentIndex = currentStep - 1;
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                  index < currentIndex
                    ? 'bg-[#9D7F5F] text-white'
                    : index === currentIndex
                    ? 'bg-[#9D7F5F] text-white ring-2 ring-[#9D7F5F] ring-offset-2'
                    : 'bg-zinc-200 text-zinc-600'
                }`}
              >
                {index < currentIndex ? '✓' : step.id}
              </div>
              <span
                className={`mt-2 text-xs font-medium ${
                  index <= currentIndex ? 'text-zinc-900' : 'text-zinc-500'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-0.5 flex-1 mx-2 ${
                  index < currentIndex ? 'bg-[#9D7F5F]' : 'bg-zinc-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

