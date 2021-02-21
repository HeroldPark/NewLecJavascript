# 이미지에 있는 텍스트 추출 과정
# python에서 Tesseract 사용하기

from os import write
from PIL import Image
import pytesseract

pytesseract.pytesseract.tessact_cmd = r'C:\Program Files\Tessact-OCR\tesseract.exe'
text = pytesseract.image_to_string(Image.open("news.jpg"), lang="kor")
print(text)
print(text.replace(" ", ""))

with open("news.txt", "w", encoding="utf8")
    f.write(text)
    f.write("\n\n\n")
    f.write(text.replace(" ", ""))