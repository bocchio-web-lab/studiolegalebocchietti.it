export const EMAILS = {
    MASTER: 'tommaso.bocchietti@gmail.com',
    BOCCHIETTI: 'bocchietti@studiolegalebocchietti.it',
    BULANTI: 'bulanti@studiolegalebulanti.it',
    PEC_BOCCHIETTI: 'avvclaudiobocchietti@pec.giuffre.it'
} as const;

export const PHONE_NUMBERS = {
    CELLULAR: '3396450977',
    OFFICE: '031264110',
    full(number: string): string {
        return `+39 ${number}`;
    }
} as const;

export const ADDRESS = {
    STREET: 'Via Volta, 40',
    CITY: '22100 Como (CO)',
    LINK: 'https://maps.app.goo.gl/qp5u4bQz2zsERex3A',
    full(): string {
        return `${ADDRESS.STREET}, ${ADDRESS.CITY}`;
    }
} as const;

export const FISCAL_DATA = {
    IVA_CODE: '02770290134',
    TAX_CODE: 'BCCCLD64M23C933R'
} as const;


export const CONFIG = {
    EMAILS,
    PHONE_NUMBERS,
    ADDRESS,
    FISCAL_DATA
} as const;