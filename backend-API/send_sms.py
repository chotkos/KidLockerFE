from smsapi.client import SmsAPI
from smsapi.responses import ApiError


def send_sms(phone_num, text):
    api = SmsAPI()

    # autoryzacyja standardowa
    api.set_username('')
    api.set_password('')


    try:
        api.service('sms').action('send')
        api.set_content(text)
        api.set_to(phone_num)
        api.set_from('Info')  # Pole nadawcy lub typ wiadomość 'ECO', '2Way'

        print("sending: " + text)
        result = api.execute()

        response = ""
        for r in result:
            for resp in result.data:
                response = dict(resp)

        return response
    except ApiError as e:
        print('%s - %s' % (e.code, e.message))
