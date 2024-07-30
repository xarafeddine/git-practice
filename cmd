openssl enc -aes-256-cbc -salt -pbkdf2 -in <file> -out <encryptedFile>

openssl enc -aes-256-cbc -d -pbkdf2 -in <encryptedFile> -out <decryptedFile>
