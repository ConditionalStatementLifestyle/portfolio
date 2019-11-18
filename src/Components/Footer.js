import React from 'react';
import { footerIcons } from './constants';

export default function Footer() {

    return (
        <div className="bottom-links">
            {footerIcons.map(icon => {
                const { href, className } = icon;
                return (
                    <a href={href}>
                        <button className="ui circular linkedin icon button black">
                            <i className={className}></i>
                        </button>
                    </a>
                )
            })}
            <br></br>
            <div className='footer-text'>
                jlangkammer@gmail.com
            </div>
        </div>
    )
}
