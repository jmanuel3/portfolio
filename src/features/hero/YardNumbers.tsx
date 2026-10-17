// Painted yard numbers, one per yard line (left goal line to right goal line)
const YARD_NUMBERS = [10, 20, 30, 40, 50, 40, 30, 20, 10];

// Decorative field marking, hidden from assistive technology
export function YardNumbers() {
  return (
    <ol aria-hidden="true" className="yard-numbers">
      {YARD_NUMBERS.map((yards, index) => (
        <li key={index}>{yards}</li>
      ))}
    </ol>
  );
}
