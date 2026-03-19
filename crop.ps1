Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile('C:\Users\Sertav\.gemini\antigravity\scratch\sertav-blog\background.jpg.png')
# Crop the bottom 336 pixels (which typically safely covers watermarks and large bottom-centered text text)
$cropRect = New-Object System.Drawing.Rectangle(0, 0, $img.Width, ($img.Height - 336))
$croppedImg = New-Object System.Drawing.Bitmap($cropRect.Width, $cropRect.Height)
$graphics = [System.Drawing.Graphics]::FromImage($croppedImg)
$graphics.DrawImage($img, (New-Object System.Drawing.Rectangle(0, 0, $croppedImg.Width, $croppedImg.Height)), $cropRect, [System.Drawing.GraphicsUnit]::Pixel)
$croppedImg.Save('C:\Users\Sertav\.gemini\antigravity\scratch\sertav-blog\background-cropped.png', [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$croppedImg.Dispose()
$img.Dispose()
Write-Output "Image cropped successfully."
