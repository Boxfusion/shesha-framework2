﻿using Abp.Dependency;
using Shesha.Otp.Configuration;
using System;

namespace Shesha.Otp
{
    public class OtpGenerator: IOtpGenerator, ITransientDependency
    {
        private readonly IOtpSettings _settings;

        public OtpGenerator(IOtpSettings settings)
        {
            _settings = settings;
        }

        public string GeneratePin()
        {
            var random = new Random();
            var password = string.Empty;

            var alphabet = _settings.Alphabet.GetValue();
            var passwordLength = _settings.PasswordLength.GetValue();

            for (int i = 0; i < passwordLength; i++)
            {
                password += alphabet[random.Next(alphabet.Length)];
            }

            return password;
        }
    }
}
