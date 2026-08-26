import type { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

const Panel = ({ children }: PanelProps) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    }}
  >
    {children}
  </div>
);

export default Panel;
