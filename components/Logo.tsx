export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <img
      src="/icon.png"
      alt="SportsCardPulse"
      width={size}
      height={size}
      style={{ borderRadius: size * 0.22, display: "block" }}
    />
  );
}
