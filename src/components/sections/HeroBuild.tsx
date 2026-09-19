import messages from "../../../messages/es.json";
import { buildGeometry as geometry } from "./heroBuildGeometry";
import HeroBuildMotion from "./HeroBuildMotion";
import styles from "./HeroBuild.module.css";

const compositions = [
  { name: "desktop", depth: "Desktop", viewBox: "0 0 640 620", placement: "translate(165 125) scale(1.35)", guides: "M118 114 173 142M522 85V121M119 503 178 479M430 545 369 425M100 594H608M165 590v8m140-8v8m140-8v8m140-8v8" },
  { name: "tablet", depth: "Tablet", viewBox: "0 0 780 440", placement: "translate(260 50) scale(1.12)", guides: "M207 97H254M618 91H584M206 341H256M614 332 464 270M204 415H640" },
  { name: "mobile", depth: "Mobile", viewBox: "0 0 342 365", placement: "translate(35 55) scale(.9)", guides: "M132 77H112M221 288 188 249" },
] as const;

function Annotations() {
  const content = messages.Hero.network;
  return (
    <>
      <div data-build-label className={`${styles.annotation} ${styles.profile}`}>
        <span className={styles.label}>{content.profile}</span>
        <span>{content.profileDetail}</span>
        <span className={styles.available}>{content.available}</span>
      </div>
      <div data-build-label className={`${styles.annotation} ${styles.tournament}`}>
        <span className={styles.label}>{content.tournament}</span>
        <span>{content.tournamentDetail}</span>
      </div>
      <div data-build-label className={`${styles.annotation} ${styles.company}`}>
        <span className={styles.label}>{content.company}</span>
        <span>{content.companyDetail}</span>
      </div>
      <div data-build-label className={`${styles.annotation} ${styles.community}`}>
        <span className={styles.label}>{content.community}</span>
      </div>
    </>
  );
}

export default function HeroBuild() {
  return (
    <div aria-hidden="true" className={styles.build}>
      {compositions.map(({ name, depth, viewBox, placement, guides }) => (
        <div key={name} data-build-scene={name} className={`${styles.scene} ${styles[name]}`}>
          <svg viewBox={viewBox} fill="none" focusable="false" className={styles.drawing}>
            <g transform={placement}>
              <path data-build-outline d={geometry.symbol} className={styles.outline} />
              <g data-build-part="body">
                <path d={geometry[`body${depth}Side`]} className={styles.side} />
                <path d={geometry.body} className={styles.floor} />
                <g data-build-interior>
                  <path d={geometry.cavity} className={styles.recess} />
                  {name !== "mobile" && <path d={geometry.inner} className={styles.floor} />}
                  <path d={geometry.cavity} className={styles.cutEdge} />
                </g>
                <path d={geometry.bodyCut} className={styles.face} />
                <path data-build-cover d={geometry.cavity} className={styles.cover} />
              </g>
              <g transform="translate(-2.4 -2.4)">
                <g data-build-part="profile">
                  <path d={geometry[`profile${depth}Side`]} className={styles.whiteSide} />
                  <path d={geometry.profile} className={styles.whiteFace} />
                </g>
              </g>
              <g transform="translate(2.4 -2.4)">
                <g data-build-part="tournament">
                  <path d={geometry[`tournament${depth}Side`]} className={styles.side} />
                  <path d={geometry.tournament} className={styles.face} />
                </g>
              </g>
              <g transform="translate(-2.4 2.4)">
                <g data-build-part="company">
                  <path d={geometry[`company${depth}Side`]} className={styles.side} />
                  <path d={geometry.company} className={styles.face} />
                </g>
              </g>
            </g>
            <path data-build-guide d={guides} className={styles.guides} />
          </svg>
          <Annotations />
        </div>
      ))}
      <HeroBuildMotion />
    </div>
  );
}
