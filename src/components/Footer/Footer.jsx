import './Footer.scss'

export function Footer()
{
    const date=new Date();
    const year=date.getFullYear();
    
    return(
        <section className='footer'>
            <p className='footer__title'>@copyright {year}</p>
        </section>
    );
}