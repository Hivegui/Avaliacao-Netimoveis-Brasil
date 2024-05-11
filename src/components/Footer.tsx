import React from 'react';
import LogoNetimoveis from '../images/logo/Logo-Footer.png';
import IconFacebook from '../images/logo//Icon-Facebook.png';
import IconInstagram from '../images/logo/Icon-Instagram.png';
import IconLinkedin from '../images/logo/Icon-Linkedin.png';
import IconYoutube from '../images/logo/Icon-Youtube.png';

const Footer = () => {
  return (
    <footer className="bg-orange-500 p-4 text-white flex flex-col items-center justify-between lg:flex-row lg:items-center lg:justify-between">
      <div className="mb-4 lg:mb-0 lg:ml-35">
        <img src={LogoNetimoveis} alt="Logo Netimóveis" className="h-7" />
      </div>
      
      <div className="text-xs text-center mb-4 lg:mb-0">
        <p>© Copyright 2021 Netimóveis Brasil S/A - Todos os direitos reservados.</p>
        <p className='mt-1'>
          <span className="mr-3">Política de privacidade</span>
          <span className="mr-3">Termos de uso</span>
          <span className="mr-3">LGPD</span>
          <span>Versão:25/8/2021</span>
        </p>
      </div>
      
      <div className="flex justify-center space-x-4 lg:justify-end lg:mr-50">
        <a href="#" aria-label="Instagram"><img src={IconInstagram} alt="Instagram" className="h-5" /></a>
        <a href="#" aria-label="Facebook"><img src={IconFacebook} alt="Facebook" className="h-5" /></a>
        <a href="#" aria-label="LinkedIn"><img src={IconLinkedin} alt="LinkedIn" className="h-5" /></a>
        <a href="#" aria-label="YouTube"><img src={IconYoutube} alt="YouTube" className="h-5" /></a>
      </div>
    </footer>
  );
};

export default Footer;
