"use client";

import { getAssessmentGuidanceData } from "@/components/AssessmentGuidance";
import { seekerTypes } from "./assessmentData";

const focusSteps = [
  "Build a small daily practice.",
  "Reduce scattered spiritual input.",
  "Stay with one clear direction long enough for it to work on you."
];

const keyScoreNames = {
  Clarity: "clarity",
  Responsibility: "responsibility",
  Discipline: "discipline",
  Acceptance: "acceptance",
  Offering: "offering"
};

function getGuidanceScores(keys = []) {
  return keys.reduce((scores, key) => {
    const scoreName = keyScoreNames[key.name];

    if (!scoreName) return scores;

    return {
      ...scores,
      [scoreName]: key.percentage
    };
  }, {});
}

function getStartingKey(path = []) {
  return path[0] ?? "Clarity";
}

function getSecondaryType(primaryType, score) {
  const primaryIndex = seekerTypes.findIndex(
    (type) => type.title === primaryType.title
  );

  if (primaryIndex === -1) return null;

  const previous = seekerTypes[primaryIndex - 1];
  const next = seekerTypes[primaryIndex + 1];

  if (previous && score - primaryType.min <= 5) return previous;
  if (next && primaryType.max - score <= 5) return next;

  return null;
}

function ReportSection({ children, className = "" }) {
  return <section className={`pdf-section ${className}`}>{children}</section>;
}

function ReportCard({ title, children }) {
  return (
    <div className="pdf-card">
      {title ? <h3>{title}</h3> : null}
      {children}
    </div>
  );
}

function SuggestedPath({ path }) {
  return (
    <div className="pdf-path">
      {path.map((step, index) => (
        <span key={step} className="pdf-path-item">
          <span>{step}</span>
          {index < path.length - 1 ? <b>→</b> : null}
        </span>
      ))}
    </div>
  );
}

function KeyBar({ item }) {
  return (
    <div className="pdf-key-bar">
      <div className="pdf-key-bar-label">
        <span>{item.name}</span>
        <span>
          {item.percentage}% · {item.level}
        </span>
      </div>
      <div className="pdf-key-track">
        <div style={{ width: `${item.percentage}%` }} />
      </div>
    </div>
  );
}

export default function AssessmentPdfReport({ result }) {
  if (!result) return null;

  const { seekerType, strongestKey, weakestKey } = result;
  const secondaryType = getSecondaryType(seekerType, result.normalizedTotal);
  const startingKey = getStartingKey(seekerType.suggestedPath);
  const guidance = getAssessmentGuidanceData(getGuidanceScores(result.keys));

  return (
    <article className="print-report" aria-hidden="true">
      <header className="pdf-header">
        <p className="pdf-brand">Moksha Keys</p>
        <p className="pdf-subbrand">Five Keys to Inner Freedom</p>
        <h1>Your Inner Direction Report</h1>
      </header>

      <ReportSection>
        <p className="pdf-kicker">Summary</p>
        <h2>Your Inner Direction Report</h2>
        <p className="pdf-lead">
          A personal reflection based on your current inner state, aspiration,
          and readiness.
        </p>

        <div className="pdf-summary-grid">
          <ReportCard title="Current Seeker Type">
            <p>{seekerType.title}</p>
          </ReportCard>
          <ReportCard title="Primary Type">
            <p>{seekerType.title}</p>
          </ReportCard>
          {secondaryType ? (
            <ReportCard title="Secondary Type">
              <p>{secondaryType.title}</p>
            </ReportCard>
          ) : null}
          <ReportCard title="Main Need">
            <p>{seekerType.mainNeed}</p>
          </ReportCard>
          <ReportCard title="Suggested Starting Key">
            <p>{startingKey}</p>
          </ReportCard>
          <ReportCard title="Normalized Score">
            <p>{result.normalizedTotal} / 160</p>
          </ReportCard>
        </div>

        <div className="pdf-card pdf-wide-card">
          <h3>Suggested Path</h3>
          <SuggestedPath path={seekerType.suggestedPath} />
        </div>

        <p className="pdf-note">
          This result is not a fixed label. It is a mirror of where you seem to
          be right now.
        </p>
      </ReportSection>

      <ReportSection>
        <p className="pdf-kicker">Your Seeker Type</p>
        <h2>What this means</h2>
        <ReportCard title={seekerType.title}>
          <p>{seekerType.description}</p>
          <dl className="pdf-definition-list">
            <div>
              <dt>Main need</dt>
              <dd>{seekerType.mainNeed}</dd>
            </div>
            <div>
              <dt>Next step</dt>
              <dd>{seekerType.nextStep}</dd>
            </div>
          </dl>
        </ReportCard>
      </ReportSection>

      <ReportSection>
        <p className="pdf-kicker">Five Keys Balance</p>
        <h2>Your Inner Balance</h2>
        <table className="pdf-table">
          <thead>
            <tr>
              <th>Key</th>
              <th>Score</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
            {result.keys.map((key) => (
              <tr key={key.name}>
                <td>{key.name}</td>
                <td>{key.percentage}%</td>
                <td>{key.level}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pdf-bars">
          {result.keys.map((key) => (
            <KeyBar key={key.name} item={key} />
          ))}
        </div>

        <p className="pdf-note">
          These scores do not judge you. They show where your mind is strong and
          where it may need support.
        </p>
        <p className="pdf-note">
          Your strongest key shows what is already available to you. Your
          weakest key shows where your next work may begin.
        </p>
      </ReportSection>

      <ReportSection>
        <p className="pdf-kicker">Strength and Friction</p>
        <h2>What is already working</h2>
        <ReportCard title={strongestKey.name}>
          <p className="pdf-score-line">
            {strongestKey.percentage}% · {strongestKey.level}
          </p>
          <p>{strongestKey.description}</p>
          <p className="pdf-note">
            Your strongest key shows what is already supporting you. This is not
            a reason for pride. It is a strength to use wisely.
          </p>
        </ReportCard>

        <h2 className="pdf-subsection-heading">Where you may feel stuck</h2>
        <ReportCard title={weakestKey.name}>
          <p className="pdf-score-line">
            {weakestKey.percentage}% · {weakestKey.level}
          </p>
          <p>{weakestKey.description}</p>
          <p className="pdf-note">
            Your weakest key shows where your next work may begin. This is not a
            failure. It is simply the area that needs the most care.
          </p>
        </ReportCard>
      </ReportSection>

      {guidance.length ? (
        <ReportSection>
          <p className="pdf-kicker">Personal Guidance</p>
          <h2>Your 7-day guided plan</h2>
          <p className="pdf-lead">
            These suggestions are based on the Five Keys that need the most
            support right now.
          </p>

          {guidance.map((item) => (
            <ReportCard key={item.key} title={item.name}>
              <p className="pdf-score-line">
                {item.score}% · {item.label}
              </p>
              <p>{item.insight}</p>

              <h3>What you can do</h3>
              <ol className="pdf-list">
                {item.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ol>

              <h3>If you do just one thing</h3>
              <p>{item.one}</p>

              <h3>Seven-day practice</h3>
              <ol className="pdf-list">
                {item.sevenDays.map((day) => (
                  <li key={day}>{day}</li>
                ))}
              </ol>

              <p className="pdf-note">{item.direction}</p>
              <p className="pdf-note">
                Continue here: {item.linkText} ({item.link})
              </p>
            </ReportCard>
          ))}
        </ReportSection>
      ) : null}

      <ReportSection>
        <p className="pdf-kicker">Your Next Step</p>
        <h2>Your immediate focus</h2>
        <p className="pdf-lead">For now, do not try to do everything.</p>
        <ReportCard title="Focus on these three steps">
          <ol className="pdf-list">
            {focusSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </ReportCard>

        <h2 className="pdf-subsection-heading">Suggested Path</h2>
        <SuggestedPath path={seekerType.suggestedPath} />
      </ReportSection>

      <ReportSection>
        <p className="pdf-kicker">Closing Reflection</p>
        <h2>A simple reminder</h2>
        <div className="pdf-closing">
          <p>You are not behind.</p>
          <p>You are not lost.</p>
          <p>You are seeing yourself more honestly.</p>
          <p>That itself is already a movement toward inner freedom.</p>
        </div>
      </ReportSection>

      <footer className="pdf-footer">
        <p>MokshaKeys.com | Five Keys to Inner Freedom</p>
        <p>
          This report is for reflection only. It is not a diagnosis, therapy, or
          spiritual authority.
        </p>
      </footer>
    </article>
  );
}
