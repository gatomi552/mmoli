import React, { createContext, useState, ReactNode } from "react";

type QRContextType = {
  qrData: string;
  setQrData: (data: string) => void;
};

export const QRContext = createContext<QRContextType>({
  qrData: "",
  setQrData: () => {}
});

export default function QRProvider({ children }: { children: ReactNode }) {

  const [qrData, setQrData] = useState("");

  return (
    <QRContext.Provider value={{ qrData, setQrData }}>
      {children}
    </QRContext.Provider>
  );
}