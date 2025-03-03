import { SectionContainer } from "../SectionContainer/SectionContaine";
import * as S from "./Contact.styles";

export function Contact() {
    return(

        <SectionContainer themeColor="darkBlue" title="Contact me">
            <S.Contact>
                <S.ContactForm>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Send</button>
                </S.ContactForm>
                <img src="/contact-img.svg" alt="" />
            </S.Contact>
        </SectionContainer>
    )
}