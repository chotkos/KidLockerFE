from flask import jsonify

from smsapi.client import SmsAPI
from smsapi.responses import ApiError


def send_sms(phone_num, text):
    api = SmsAPI()

    # autoryzacyja standardowa
    api.set_username('chotkos@gmail.com')
    api.set_password('1607Mati')

    # lub za pomocą tokenu
    # api.auth_token = 'your-api-token'

    try:
        api.service('sms').action('send')

        api.set_content(text)
        # api.set_content('Twoj kod to: [%1%]')
        api.set_to(phone_num)
        api.set_from('Info')  # Pole nadawcy lub typ wiadomość 'ECO', '2Way'

        result = api.execute()

        response = ""
        for r in result:
            for resp in result.data:
                response = dict(resp)
                # response = response + "id:{} points:{} status:{}".format(str(r.id) + " " + str(r.points) + " " + str(r.status)

        return response
    except ApiError as e:
        print('%s - %s' % (e.code, e.message))
