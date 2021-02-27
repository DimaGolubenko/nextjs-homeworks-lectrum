export const Roboto = () => (
  <>
    <link rel="preload" href="/fonts/roboto/Roboto.woff2" as="font" crossOrigin="anonymous" />
    <link rel="preload" href="/fonts/roboto/Robotobold.woff2" as="font" crossOrigin="anonymous" />
    <style
      dangerouslySetInnerHTML={{
        __html: `
          @font-face {
            font-family: "Roboto";
            font-weight: 400;
            font-style: normal;
            font-display: swap;
            src: local("Roboto"), local("Roboto"), url("/fonts/roboto/Roboto.woff2") format("woff2"), url("/fonts/roboto/Roboto.woff") format("woff");
          }
          @font-face {
            font-family: "Roboto";
            font-weight: 700;
            font-style: normal;
            font-display: swap;
            src: local("Roboto Bold"), local("Roboto-Bold"), url("/fonts/roboto/Robotobold.woff2") format("woff2"), url("/fonts/roboto/Robotobold.woff") format("woff");
          }
        `,
      }}
    />
  </>
);
