import PanelBase from '../PanelBase/PanelBase';
import WaxSeal from '../../shared/WaxSeal/WaxSeal';
import { LOCATIONS } from '../../../utils/constants';
import styles from './FortressPanel.module.css';

export default function FortressPanel() {
  return (
    <PanelBase locationId={LOCATIONS.FORTRESS} title="⚔ The Fortress — About Me">
      {/* Drawbridge entrance animation */}
      <div className={styles.drawbridge} aria-hidden="true">🏰</div>

      {/* Portrait + identity */}
      <div className={styles.portrait}>
        <div className={styles.avatarWrap}>
          {/* PORTRAIT PLACEHOLDER — replace src with your photo path: /images/taqee-portrait.jpg */}
          <div className={styles.avatarPlaceholder} title="Portrait placeholder — add photo to /public/images/taqee-portrait.jpg">
            🧭
          </div>
          <div className={styles.sealWrap}>
            <WaxSeal label="T" />
          </div>
        </div>
        <div className={styles.info}>
          <h3>Taqee Moore</h3>
          <p>IT Professional · Freelance Web Developer</p>
          <p>Detroit, MI (Remote) · EST</p>
          <div className={styles.contact}>
            <span className={styles.contactChip}>📞 313-646-7526</span>
            <span className={styles.contactChip}>✉ 1karvsthecarver@gmail.com</span>
            <span className={styles.contactChip}>🌐 EN · AR</span>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>The Captain&apos;s Log</h4>
        <p className={styles.bodyText}>
          Versatile IT Support Professional and Freelance Web Developer with 4+ years of experience in remote
          MSP and help desk environments, and hands-on experience building and managing client-facing digital products.
          Skilled in technical support, CRM documentation, and customer communication across phone, chat, and email.
          Experienced in Shopify e-commerce development, Telegram bot collaboration, and cross-functional project
          coordination. Brings a proactive, solutions-first mindset to every role.
        </p>
      </div>

      {/* Certifications */}
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Royal Charters (Certifications)</h4>
        <p className={styles.bodyText}>⚜ CompTIA A+ Certified</p>
        <p className={styles.bodyText}>⚜ Google IT Support Professional Certificate</p>
        <p className={styles.bodyText}>⚜ WGU B.S. Software Engineering (In Progress)</p>
        <p className={styles.bodyText}>⚜ PerScholas — IT Support &amp; Systems Administration</p>
      </div>

      {/* Links */}
      <div className={styles.resumeRow}>
        <a
          href="/resume/Taqee_Moore_Resume.pdf"
          download
          className={styles.resumeBtn}
          aria-label="Download resume PDF"
        >
          📜 Download Resume
        </a>
        <a
          href="https://github.com/1KarvsTheCarver"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
          aria-label="GitHub profile (opens in new tab)"
        >
          ⚓ GitHub
        </a>
        <a
          href="https://linkedin.com/in/taqee-moore"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeBtn}
          aria-label="LinkedIn profile (opens in new tab)"
        >
          🗺 LinkedIn
        </a>
      </div>
    </PanelBase>
  );
}
