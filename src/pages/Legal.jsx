import React from 'react'
import '../styles/pages/Legal.css'

const Legal = () => {
  return (
    <div className="legal">
      <div className="card">
        <h1>Burime Ligjore & Ndihmë</h1>
        
        <section className="resource-section">
          <h2>Të Drejtat & Përgjegjësitë Tuaja</h2>
          <div className="resource-grid">
            <div className="resource-card">
              <h3>🔒 Të Drejtat e Privatësisë</h3>
              <ul>
                <li>E drejta për të pasur akses në të dhënat tuaja personale</li>
                <li>E drejta për të kërkuar fshirjen e të dhënave</li>
                <li>E drejta për të ditur se si përdoren të dhënat tuaja</li>
                <li>E drejta për të refuzuar përpunimin e të dhënave jo-thelbësore</li>
              </ul>
            </div>
            
            <div className="resource-card">
              <h3>⚖️ Përgjegjësitë e Raportimit</h3>
              <ul>
                <li>Jepni informacion të saktë</li>
                <li>Raportoni me qëllim të mirë</li>
                <li>Respektoni konfidencialitetin e procesit</li>
                <li>Ndiqni statusin e raportit në mënyrë të përshtatshme</li>
              </ul>
            </div>
            
            <div className="resource-card">
              <h3>🛡️ Garancitë e Mbrojtjes</h3>
              <ul>
                <li>Mbrojtje kundër hakmarrjes</li>
                <li>Trajtim konfidencial i raporteve</li>
                <li>Opsione raportimi anonim</li>
                <li>Proces ankese për vendimet</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="resource-section">
          <h2>Marrja e Ndihmës & Suportit</h2>
          <div className="help-contacts">
            <div className="help-card">
              <h4>🎗️ Shërbime Këshillimi</h4>
              <p><strong>Qendra e Këshillimit për Studentë:</strong> 038 123 456</p>
              <p><strong>Orari:</strong> Linja e krizës 24/7 e disponueshme</p>
              <p><strong>Email:</strong> keshillim@universiteti.edu</p>
            </div>
            
            <div className="help-card">
              <h4>📞 Linjat e Ndihmës së Shpejtë</h4>
              <p><strong>Siguria e Kampusit:</strong> 112 ose 038 999 999</p>
              <p><strong>Zyra e Barazisë:</strong> 038 123 789</p>
              <p><strong>Ndihmë Juridike:</strong> 038 123 555</p>
            </div>
            
            <div className="help-card">
              <h4>🌐 Burime të Jashtme</h4>
              <p><strong>Qendra për të Drejtat e Njeriut:</strong> kqk-rks.org</p>
              <p><strong>Ombudspersoni:</strong> ombudspersoni-rks.org</p>
              <p><strong>Avokati i Popullit:</strong> avokatipopullit.org</p>
            </div>
          </div>
        </section>

        <section className="resource-section">
          <h2>Pyetjet më të Shpeshta</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Çfarë ndodh pasi të paraqes një raport?</h4>
              <p>Raportet shqyrtohen nga administratorë të trajnuar brenda 48 orësh. Do të merrni përditësime të statusit dhe mund të kontaktoheni për informacion shtesë nëse është e nevojshme.</p>
            </div>
            
            <div className="faq-item">
              <h4>A mund të raportoj anonimisht?</h4>
              <p>Po, mund të zgjidhni të paraqisni raporte anonimisht. Megjithatë, kjo mund të kufizojë aftësinë tonë për të ndjekur ose ndërmarrë veprime specifike që kërkojnë përfshirjen tuaj.</p>
            </div>
            
            <div className="faq-item">
              <h4>Si mbrohen të dhënat e mia?</h4>
              <p>Ne përdorim enkriptim, kontroll të aksesit dhe auditime të rregullta sigurie për të mbrojtur të dhënat tuaja. Vetëm administratorë të autorizuar mund të kenë akses në detajet e raportit.</p>
            </div>
            
            <div className="faq-item">
              <h4>Çfarë nëse nuk jam i pajtueshëm me një vendim?</h4>
              <p>Mund të ankoheni për çdo vendim përmes procesit të ankesave të disponueshëm në historinë tuaj të raporteve. Do të kryhet një shqyrtim shtesë nga një administrator tjetër.</p>
            </div>
          </div>
        </section>

        <div className="transparency-banner">
          <strong>Angazhimi për Transparencë:</strong> Ne jemi të përkushtuar për të mbajtur standardet më të larta të sjelljes etike, mbrojtjes së privatësisë dhe operacioneve transparente.
        </div>
      </div>
    </div>
  )
}

export default Legal