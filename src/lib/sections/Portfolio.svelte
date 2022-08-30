<script lang="ts">
  import Container from "../components/Container.svelte";
  import SectionTitle from "../components/SectionTitle.svelte";
  import Section from "../components/Section.svelte";
  import PortfolioItem, {
    EPreviewPosition,
  } from "./portfolio/PortfolioItem.svelte";
  import MacbookPreviewImage from "../components/MacbookPreviewImage.svelte";
  import aspSystemPreview from "../../assets/images/asp-system-preview.png";
  import fuifPreview from "../../assets/images/fuif-preview.png";
  import MediaQuery from "../MediaQuery.svelte";
</script>

<MediaQuery query="(min-width: 1400px)" let:matches={matches1400}>
  <MediaQuery query="(min-width: 1250px)" let:matches={matches1250}>
    <MediaQuery query="(min-width: 1000px)" let:matches={matches1000}>
      <MediaQuery query="(min-width: 800px)" let:matches={matches800}>
        <MediaQuery query="(min-width: 600px)" let:matches={matches600}>
          <div class="root">
            <Section id="portfolio" class="section">
              <Container>
                <SectionTitle>Portfolio</SectionTitle>

                <PortfolioItem previewPosition={EPreviewPosition.Right}>
                  <span slot="title">ASP System</span>
                  <div slot="content">
                    <p>
                      The backbone of <a href="https://www.splash.nl"
                        >Splash Lease</a
                      >, a company that rents washing machines, dryers,
                      dishwashers and many more to student houses all over the
                      Netherlands.
                    </p>
                    <p>
                      ASP System is an internal web-based application that
                      encompasses all functionalities that are required for the
                      business to operate.
                    </p>
                    <p>Some noteworthy functionalities are:</p>
                    <ul>
                      <li>Customer management</li>
                      <li>Integrated communication</li>
                      <li>Product management</li>
                      <li>Inventory management</li>
                      <li>Financial management</li>
                    </ul>
                    <p>
                      I architected and developed a large majority of this
                      application, both front-end and back-end.
                    </p>
                    <p>
                      The main technologies used to built this application were
                      React and Node.js, and all of the code was written in
                      Typescript.
                    </p>
                    <p class="redacted-notice">
                      Note: some information shown within the image is redacted
                      by black bars to prevent the publicity of private data.
                    </p>
                  </div>
                  <div
                    slot="preview"
                    style={matches1400
                      ? "position: relative; left: 600px; margin-left: -450px;"
                      : matches1250
                      ? "position: relative; left: 400px; margin-left: -350px;"
                      : "margin-top: 50px;"}
                  >
                    <MacbookPreviewImage
                      width={matches1400
                        ? 900
                        : matches1250
                        ? 750
                        : matches1000
                        ? 800
                        : matches800
                        ? 600
                        : matches600
                        ? 450
                        : 325}
                      previewSrc={aspSystemPreview}
                    />
                  </div>
                </PortfolioItem>

                <div class="divider-space" />

                <PortfolioItem
                  previewPosition={matches1400 || matches1250
                    ? EPreviewPosition.Left
                    : EPreviewPosition.Right}
                >
                  <span slot="title">Fuif</span>
                  <div slot="content">
                    <p>
                      <a href="https://fuifapp.com">Fuif</a> is a powerful app for
                      managing and organizing parties, nightlife and festivals.
                    </p>
                    <p>
                      The core philosophy of Fuif is in it's ease-of-use and the
                      value it provides to the user by bringing attention to
                      detail to all functionalities the app provides.
                    </p>
                    <p>
                      Users can easily manage parties or similar events and
                      share them with friends, and get a clear overview on all
                      sorts of relevant information.
                    </p>
                    <p>Some noteworthy functionalities are:</p>
                    <ul>
                      <li>
                        Navigation/transit integration (Uber, Public Transit)
                      </li>
                      <li>Pick-a-date party planning</li>
                      <li>Restaurant takeout integration (shared order)</li>
                      <li>
                        Bring-a-thing overview (view what is at a party/what
                        others a bringing with them)
                      </li>
                      <li>Built-in shared mediaplayer (YouTube/Spotify)</li>
                    </ul>
                    <p>
                      Fuif is developed for iOS and Android using Flutter, and
                      will be using Svelte for the upcoming web-based version
                      for users that do not have the native app installed.
                    </p>
                    <p>
                      The backend is being powered by a GraphQL API written in
                      Rust that streams real-time updates right to the app.
                    </p>
                  </div>
                  <div slot="preview">
                    <div
                      style={matches1400
                        ? "width: 500px; display: flex; align-items: center; justify-content: center; margin-top: 40px; margin-right: 75px;"
                        : matches1250
                        ? "width: 350px; display: flex; align-items: center; justify-content: center; margin-top: 40px; margin-right: 75px;"
                        : "margin-top: 50px;"}
                    >
                      <img src={fuifPreview} width={matches1400 ? 350 : 300} />
                    </div>
                  </div>
                </PortfolioItem>

                <p class="other-projects">
                  I also have many other smaller projects that can be viewed
                  directly on my <a href="https://github.com/elertan"
                    >GitHub profile</a
                  >.
                </p>
              </Container>
            </Section>
          </div>
        </MediaQuery>
      </MediaQuery>
    </MediaQuery>
  </MediaQuery>
</MediaQuery>

<style lang="scss">
  .root :global(.section) {
    background-color: var(--color-light);
  }

  .root {
    color: var(--color-dark);
  }

  .divider-space {
    padding-top: calc(1 * var(--spacing-unit));
  }

  .redacted-notice {
    margin-top: calc(2 * var(--spacing-unit)) !important;
    color: var(--color-text-muted);
    font-size: calc(0.8 * var(--font-size)) !important;
  }

  .other-projects {
    margin-top: calc(3 * var(--spacing-unit));
    text-align: center;
  }
</style>
