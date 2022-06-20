import mainLogo from "../../assets/img/medical.png";
import Blockquote from "../ui/blockquote";
import Button from "../ui/button";
import Heading from "../ui/heading";
import { HeroLeft, HeroRight, StyledHero } from "./Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <section>
        <HeroLeft>
          <Heading level="2" variant="primary">
            Covid ID
          </Heading>
          
          <Blockquote variant="secondary">
          <Heading level="3" variant="secondary">
            Monitoring Perkembangan Covid
          </Heading>
            <p>
              Pandemi Covid-19 adalah peristiwa menyebarnya Penyakit koronavirus
              2019 (Bahasa Inggris: Coronavirus disease 2019, disingkat
              Covid-19) di seluruh dunia untuk semua Negara.
            </p>
          </Blockquote>
          <Button as="a" href="#" target="_blank" variant="primary" size="lg">
            Vaccine
          </Button>
        </HeroLeft>
        <HeroRight>
          <img src={mainLogo} width="536" height="354" alt="placeholder" />
        </HeroRight>
      </section>
    </StyledHero>
  );
}

export default Hero;
