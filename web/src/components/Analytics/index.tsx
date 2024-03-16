// quando atualizar para next 14 ↓
// https://nextjs.org/docs/messages/next-script-for-ga

const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=&${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());        
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `,
      }}
    />
  </>
);

export default Analytics;

// referência: https://www.youtube.com/watch?v=355aCWZiEnw
