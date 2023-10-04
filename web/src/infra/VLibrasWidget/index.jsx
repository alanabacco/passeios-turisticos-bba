/* eslint-disable react/no-unknown-property */
const VLibrasWidget = () => {
  return (
    <>
      <div vw="true" className="enabled">
        <div vw-access-button="true" className="active">
          <img className="pop-up" data-src="" alt="" src="" />
        </div>
        <div vw-plugin-wrapper="true">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
      <script id="vlibras-js" src="https://vlibras.gov.br/app/vlibras-plugin.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `new window.VLibras.Widget("${"https://vlibras.gov.br/app"}");`,
        }}
      />
    </>
  );
};

export default VLibrasWidget;
