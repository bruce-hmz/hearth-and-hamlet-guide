type Stage = {
  name: string;
  note: string;
};

/**
 * The Hearthline — kingdom-stage progression strip.
 * Signature element: Campfire → Village → Town → Kingdom,
 * the four verified settlement stages of the game.
 */
export function StageStrip({ stages }: { stages: Stage[] }) {
  return (
    <ol className="hearthline">
      {stages.map((stage, i) => (
        <li key={stage.name}>
          <span className="stage-no">Stage {i + 1}</span>
          <div className="stage-name">{stage.name}</div>
          <p className="stage-note">{stage.note}</p>
        </li>
      ))}
    </ol>
  );
}
