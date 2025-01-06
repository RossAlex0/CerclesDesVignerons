export interface Region {
  id: number;
  name: string;
  description: string;
  descriptionTel: string;
  image: string;
}

export const handleSpeak = (
  description: string,
  setter: (state: boolean) => void
) => {
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    synth.cancel();
  }

  const utterance = new SpeechSynthesisUtterance(description);
  utterance.lang = "fr-FR";

  utterance.onstart = () => setter(true);

  utterance.onend = () => setter(false);

  synth.speak(utterance);
};

export const handleStop = (setter: (state: boolean) => void) => {
  const synth = window.speechSynthesis;

  if (synth.speaking) {
    synth.cancel();
    setter(false);
  }
};
