import React from 'react';
import LogoNetimoveis from '../images/logo/Logo-Footer.png';
import IconFacebook from '../images/logo//Icon-Facebook.png';
import IconInstagram from '../images/logo/Icon-Instagram.png';
import IconLinkedin from '../images/logo/Icon-Linkedin.png';
import IconYoutube from '../images/logo/Icon-Youtube.png';

const Footer = () => {
  return (
    <footer className="bg-orange-500 p-4 text-white flex items-center justify-between">
      <div className="flex justify-start">
        <div className="ml-50">
          <img src={LogoNetimoveis} alt="Logo Netimóveis" className="h-7" />
        </div>
      </div>
      
      {/* Texto centralizado */}
      <div className="flex flex-col items-center text-xs">
        <p>© Copyright 2021 Netimóveis Brasil S/A - Todos os direitos reservados.</p>
        <p className='mt-1'>
          <span className="mr-7">Política de privacidade</span>
          <span className="mr-7">Termos de uso</span>
          <span className="mr-7">LGPD</span>
          <span>Versão:25/8/2021</span>
        </p>
      </div>
      
      {/* Imagens no canto direito */}
      <div className="flex justify-end space-x-4 mr-50">
        <a href="#" aria-label="Instagram"><img src={IconInstagram} alt="Instagram" className="h-5" /></a>
        <a href="#" aria-label="Facebook"><img src={IconFacebook} alt="Facebook" className="h-5" /></a>
        <a href="#" aria-label="LinkedIn"><img src={IconLinkedin} alt="LinkedIn" className="h-5" /></a>
        <a href="#" aria-label="YouTube"><img src={IconYoutube} alt="YouTube" className="h-5" /></a>
      </div>
    </footer>
  );
};

export default Footer;
