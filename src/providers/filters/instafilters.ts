import { brightness, contrast, saturation, sepia, colorFilter, grayscale, rgbAdjust } from './primaryfilters';

// Clarendon: adds light to lighter areas and dark to darker areas
export const clarendon = (pixels) => {
  pixels = brightness.apply(this, [pixels, 0.1]);
  pixels = contrast.apply(this, [pixels, 0.1]);
  pixels = saturation.apply(this, [pixels, 0.15]);
  return pixels;
};

// Gingham: Vintage-inspired, taking some color out
export const gingham = (pixels) => {
  pixels = sepia.apply(this, [pixels, 0.04]);
  pixels = contrast.apply(this, [pixels, -0.15]);
  return pixels;
};

// Moon: B/W, increase brightness and decrease contrast
export const moon = (pixels) => {
  pixels = grayscale.apply(this, [pixels, 1]);
  pixels = contrast.apply(this, [pixels, -0.04]);
  pixels = brightness.apply(this, [pixels, 0.1]);
  return pixels;
};

// Lark: Brightens and intensifies colours but not red hues
export const lark = (pixels) => {
  pixels = brightness.apply(this, [pixels, 0.08]);
  pixels = rgbAdjust.apply(this, [pixels, [1, 1.03, 1.05]]);
  pixels = saturation.apply(this, [pixels, 0.12]);
  return pixels;
};

// Reyes: a new vintage filter, gives your photos a “dusty” look
export const reyes = (pixels) => {
  pixels = sepia.apply(this, [pixels, 0.4]);
  pixels = brightness.apply(this, [pixels, 0.13]);
  pixels = contrast.apply(this, [pixels, -0.05]);
  return pixels;
};

// Juno: Brightens colors, and intensifies red and yellow hues
export const juno = (pixels) => {
  pixels = rgbAdjust.apply(this, [pixels, [1.01, 1.04, 1]]);
  pixels = saturation.apply(this, [pixels, 0.3]);
  return pixels;
};

// Slumber: Desaturates the image as well as adds haze for a retro, dreamy look – with an emphasis on blacks and blues
export const slumber = (pixels) => {
  pixels = brightness.apply(this, [pixels, 0.1]);
  pixels = saturation.apply(this, [pixels, -0.5]);
  return pixels;
};

// Crema: Adds a creamy look that both warms and cools the image
export const crema = (pixels) => {
  pixels = rgbAdjust.apply(this, [pixels, [1.04, 1, 1.02]]);
  pixels = saturation.apply(this, [pixels, -0.05]);
  return pixels;
};

// Ludwig: A slight hint of desaturation that also enhances light
export const ludwig = (pixels) => {
  pixels = brightness.apply(this, [pixels, 0.05]);
  pixels = saturation.apply(this, [pixels, -0.03]);
  return pixels;
};

// Aden: This filter gives a blue/pink natural look
export const aden = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [228, 130, 225, 0.13]]);
  pixels = saturation.apply(this, [pixels, -0.2]);
  return pixels;
};

// Perpetua: Adding a pastel look, this filter is ideal for portraits
export const perpetua = (pixels) => {
  pixels = rgbAdjust.apply(this, [pixels, [1.05, 1.1, 1]]);
  return pixels;
};

// Amaro: Adds light to an image, with the focus on the centre
export const amaro = (pixels) => {
  pixels = saturation.apply(this, [pixels, 0.3]);
  pixels = brightness.apply(this, [pixels, 0.15]);
  return pixels;
};

// Mayfair: Applies a warm pink tone, subtle vignetting to brighten the photograph center and a thin black border
export const mayfair = (pixels) => {
  colorFilter.apply(this, [pixels, [230, 115, 108, 0.05]]);
  saturation.apply(this, [pixels, 0.15]);
  return pixels;
};

// Rise: Adds a "glow" to the image, with softer lighting of the subject
export const rise = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 170, 0, 0.1]]);
  pixels = brightness.apply(this, [pixels, 0.09]);
  pixels = saturation.apply(this, [pixels, 0.1]);
  return pixels;
};

// Hudson: Creates an "icy" illusion with heightened shadows, cool tint and dodged center
export const hudson = (pixels) => {
  pixels = rgbAdjust.apply(this, [pixels, [1, 1, 1.25]]);
  pixels = contrast.apply(this, [pixels, 0.1]);
  pixels = brightness.apply(this, [pixels, 0.15]);
  return pixels;
};

// Valencia: Fades the image by increasing exposure and warming the colors, to give it an antique feel
export const valencia = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 225, 80, 0.08]]);
  pixels = saturation.apply(this, [pixels, 0.1]);
  pixels = contrast.apply(this, [pixels, 0.05]);
  return pixels;
};

// X-Pro II: Increases color vibrance with a golden tint, high contrast and slight vignette added to the edges
export const xpro2 = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 255, 0, 0.07]]);
  pixels = saturation.apply(this, [pixels, 0.2]);
  pixels = contrast.apply(this, [pixels, 0.15]);
  return pixels;
};

// Sierra: Gives a faded, softer look
export const sierra = (pixels) => {
  pixels = contrast.apply(this, [pixels, -0.15]);
  pixels = saturation.apply(this, [pixels, 0.1]);
  return pixels;
};

// Willow: A monochromatic filter with subtle purple tones and a translucent white border
export const willow = (pixels) => {
  pixels = grayscale.apply(this, [pixels, 1]);
  pixels = colorFilter.apply(this, [pixels, [100, 28, 210, 0.03]]);
  pixels = brightness.apply(this, [pixels, 0.1]);
  return pixels;
};

// Lo-Fi: Enriches color and adds strong shadows through the use of saturation and "warming" the temperature
export const lofi = (pixels) => {
  pixels = contrast.apply(this, [pixels, 0.15]);
  pixels = saturation.apply(this, [pixels, 0.2]);
  return pixels;
};

// Inkwell: Direct shift to black and white
export const inkwell = (pixels) => {
  pixels = grayscale.apply(this, [pixels, 1]);
  return pixels;
};

// Hefe: Hight contrast and saturation, with a similar effect to Lo-Fi but not quite as dramatic
export const hefe = (pixels) => {
  pixels = contrast.apply(this, [pixels, 0.1]);
  pixels = saturation.apply(this, [pixels, 0.15]);
  return pixels;
};

// Nashville: Warms the temperature, lowers contrast and increases exposure to give a light "pink" tint – making it feel "nostalgic"
export const nashville = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [220, 115, 188, 0.12]]);
  pixels = contrast.apply(this, [pixels, -0.05]);
  return pixels;
};

// Stinson: washing out the colors ever so slightly
export const stinson = (pixels) => {
  pixels = brightness.apply(this, [pixels, 0.1]);
  pixels = sepia.apply(this, [pixels, 0.3]);
  return pixels;
};

// Vesper: adds a yellow tint that
export const vesper = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 225, 0, 0.05]]);
  pixels = brightness.apply(this, [pixels, 0.06]);
  pixels = contrast.apply(this, [pixels, 0.06]);
  return pixels;
};

// Earlybird: Gives an older look with a sepia tint and warm temperature
export const earlybird = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 165, 40, 0.2]]);
  return pixels;
};

// Brannan: Increases contrast and exposure and adds a metallic tint
export const brannan = (pixels) => {
  pixels = contrast.apply(this, [pixels, 0.2]);
  pixels = colorFilter.apply(this, [pixels, [140, 10, 185, 0.1]]);
  return pixels;
};

// Sutro: Burns photo edges, increases highlights and shadows dramatically with a focus on purple and brown colors
export const sutro = (pixels) => {
  pixels = brightness.apply(this, [pixels, -0.1]);
  pixels = saturation.apply(this, [pixels, -0.1]);
  return pixels;
};

// Toaster: Ages the image by "burning" the centre and adds a dramatic vignette
export const toaster = (pixels) => {
  pixels = sepia.apply(this, [pixels, 0.1]);
  pixels = colorFilter.apply(this, [pixels, [255, 145, 0, 0.2]]);
  return pixels;
};

// Walden: Increases exposure and adds a yellow tint
export const walden = (pixels) => {
  pixels = brightness.apply(this, [pixels, 0.1]);
  pixels = colorFilter.apply(this, [pixels, [255, 255, 0, 0.2]]);
  return pixels;
};

// 1977: The increased exposure with a red tint gives the photograph a rosy, brighter, faded look.
export const older = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 25, 0, 0.15]]);
  pixels = brightness.apply(this, [pixels, 0.1]);
  return pixels;
};

// Kelvin: Increases saturation and temperature to give it a radiant "glow"
export const kelvin = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 140, 0, 0.1]]);
  pixels = rgbAdjust.apply(this, [pixels, [1.15, 1.05, 1]]);
  pixels = saturation.apply(this, [pixels, 0.35]);
  return pixels;
};

// Maven: darkens images, increases shadows, and adds a slightly yellow tint overal
export const maven = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [225, 240, 0, 0.1]]);
  pixels = saturation.apply(this, [pixels, 0.25]);
  pixels = contrast.apply(this, [pixels, 0.05]);
  return pixels;
};

// Ginza: brightens and adds a warm glow
export const ginza = (pixels) => {
  sepia.apply(this, [pixels, 0.06]);
  brightness.apply(this, [pixels, 0.1]);
  return pixels;
};

// Skyline: brightens to the image pop
export const skyline = (pixels) => {
  pixels = saturation.apply(this, [pixels, 0.35]);
  pixels = brightness.apply(this, [pixels, 0.1]);
  return pixels;
};

// Dogpatch: increases the contrast, while washing out the lighter colors
export const dogpatch = (pixels) => {
  pixels = contrast.apply(this, [pixels, 0.15]);
  pixels = brightness.apply(this, [pixels, 0.1]);
  return pixels;
};

// Brooklyn
export const brooklyn = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [25, 240, 252, 0.05]]);
  pixels = sepia.apply(this, [pixels, 0.3]);
  return pixels;
};

// Helena: adds an orange and teal vibe
export const helena = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [208, 208, 86, 0.2]]);
  pixels = contrast.apply(this, [pixels, 0.15]);
  return pixels;
};

// Ashby: gives images a great golden glow and a subtle vintage feel
export const ashby = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 160, 25, 0.1]]);
  pixels = brightness.apply(this, [pixels, 0.1]);
  return pixels;
};

// Charmes: a high contrast filter, warming up colors in your image with a red tint
export const charmes = (pixels) => {
  pixels = colorFilter.apply(this, [pixels, [255, 50, 80, 0.12]]);
  pixels = contrast.apply(this, [pixels, 0.05]);
  return pixels;
};
