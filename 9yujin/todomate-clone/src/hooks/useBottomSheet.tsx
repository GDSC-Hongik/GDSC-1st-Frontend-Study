import { useState } from 'react';

function useBottomSheet(initial: boolean) {
  const [isOpen, setIsOpen] = useState(initial);

  function onOpen() {
    setIsOpen(true);
  }
  function onDismiss() {
    setIsOpen(false);
  }

  return [isOpen, onOpen, onDismiss] as const;
}

export default useBottomSheet;
