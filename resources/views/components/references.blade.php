@php
    use App\Helpers\formatHelper;
@endphp

<address>
    <p>{{ formatHelper::rendersStudioLegaleBocchietti() }}</p>

    <br>

    <p>
        <a href="https://maps.app.goo.gl/qp5u4bQz2zsERex3A" target="_blank">
            Via Volta 40, 22100 Como
        </a>
    </p>
    <p>Tel. <a href="tel:031264110">+39 031-264110</a></p>
    <p>Cell. <a href="tel:3396450977">+39 3396450977</a></p>

    <br>

    <p>PEC <a href="mailto:{{ env('PEC_BOCCHIETTI') }}">{{ env('PEC_BOCCHIETTI') }}</a></p>
    <p><a href="mailto:{{ env('EMAIL_BOCCHIETTI') }}">{{ env('EMAIL_BOCCHIETTI') }}</a></p>
</address>
