// Painted yard numbers, one per yard line (left goal line to right goal line)
const YARD_NUMBERS = [10, 20, 30, 40, 50, 40, 30, 20, 10];

/*
 * Lines, hash marks, numbers and the end zone live in one layer, so the whole
 * field slides as a single transform while the mascot runs.
 * Decorative, hidden from assistive technology.
 */
export function FieldMarkings() {
  return (
    <div aria-hidden="true" className="field-markings">
      <ol className="yard-numbers">
        {YARD_NUMBERS.map((yards, index) => (
          <li key={index}>{yards}</li>
        ))}
      </ol>
    </div>
  );
}
