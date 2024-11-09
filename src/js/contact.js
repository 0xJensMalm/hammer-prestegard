// src/js/contact.js
export function generateContactPage() {
  return `
        <div class="contact-container">
            <div class="contact-info">
                <h1>Kontakt Oss</h1>
                <div class="address">
                    <h2>Besøksadresse</h2>
                    <p>Hammer Prestegård</p>
                    <p>Hammerveien 26</p>
                    <p>1472 Fjellhamar</p>
                </div>
            </div>
            
            <div class="contact-form-wrapper">
                <form class="contact-form" onsubmit="event.preventDefault();">
                    <div class="form-group">
                        <label for="name">Navn</label>
                        <input type="text" id="name" name="name" placeholder="Ditt navn" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">E-post</label>
                        <input type="email" id="email" name="email" placeholder="din@epost.no" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="subject">Emne</label>
                        <input type="text" id="subject" name="subject" placeholder="Hva gjelder henvendelsen?" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Melding</label>
                        <textarea id="message" name="message" placeholder="Skriv din melding her..." required></textarea>
                    </div>
                    
                    <button type="submit" class="submit-button">Send Melding</button>
                </form>
            </div>

            <div class="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.9243975777752!2d10.956461!3d59.949361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46417042e8d21a75%3A0x6a10de6d8b8667ba!2sHammerveien%2026%2C%201472%20Fjellhamar!5e0!3m2!1sno!2sno!4v1699567144349!5m2!1sno!2sno"
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    `;
}
