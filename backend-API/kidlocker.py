from flask import Flask, jsonify
from flask import abort
from flask import request
from send_sms import send_sms

app = Flask(__name__)


@app.route('/sendsms', methods=['POST'])
def process_sms_request():
    if not request.json or 'phone_num' not in request.json:
        abort(400)

    phone_num = request.json['phone_num']

    if 'code' in request.json and 'name' not in request.json:
        code = request.json['code']
        text = "Odebranie dziecka, kod to: " + str(code)
    elif 'name' in request.json:
        receiver_name = request.json['name']
        text = "Proba odebrania twojego dziecka przez: " + receiver_name
    elif 'code' not in request.json and 'name' not in request.json:
        abort(400)

    print("Wysyłam sms o treści {} \n na numer {}".format(text, phone_num))

    res = send_sms(phone_num, text)
    print(res)
    # return jsonify({'code': code}), 201
    return jsonify({'Response': dict(res)}), 201


if __name__ == '__main__':
    app.run()
