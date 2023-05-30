declare module 'react-speech-kit' {
  export const useSpeechRecognition: (options: {
    onResult: (result: string) => void;
  }) => {
    listen: () => void;
    listening: boolean;
    stop: () => void;
  };

  export const useSpeechSynthesis: () => {
    speak: (options: { text: string }) => void;
  };
}
