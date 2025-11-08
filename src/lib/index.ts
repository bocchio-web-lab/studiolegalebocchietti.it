export const DEFAULT_DRIVE_IDS = {
    CURRICULA_FOLDER_ID: '1l4f69Bae984BupFNMdvBYmUo8ufbQuI_',
    VADEMECUM_FOLDER_ID: '1bFvVQtDhalGtYH5H6nGUIlW254xr4iwV',
    CURRICULA_DEFAULT_FILE_ID: '14R25eVYPsGOCdNjmtpz8IZlOd-StBBVC',
    VADEMECUM_DEFAULT_FILE_ID: '1SnjmcjqG7H4qP7ffScqPKc8W8gs7MvhV'
} as const;

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