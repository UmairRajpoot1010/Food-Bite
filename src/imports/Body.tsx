import type React from "react";
import clsx from "clsx";
import svgPaths from "./svg-r54sft4p4h";

// Placeholder images replacing Figma-only asset imports
const imgImage =
  "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgImage1 =
  "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgImage2 =
  "https://images.pexels.com/photos/7658155/pexels-photo-7658155.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgImage3 =
  "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgImage4 =
  "https://images.pexels.com/photos/161519/pear-fruit-fresh-juicy-161519.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgImage5 =
  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgFoodBiteLogo =
  "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgMapLocationOfFoodBiteOnMainGtRoadWahPakistan =
  "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgSection =
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgAb6AXuDsG1YmwQpxZ6WmR2FRsZNiBhdVcS8Ku3GtshLmdKaaD839DqYtRyTqLNv9V6LqdnbC0OkgSdNwI6ImTnWrD0NnOcBvUKm0Bj5Sd3L77Rw9W6DVwkWdyvIsPk3LRLwyXHq28VZ3VMzLngUXc9Bndt9LrFupVIr1Jh6TCyfS59Pre3FoyTMuBqveZwnUgYvmybEr9MYhR4DNmvA7F69Lf89DJ5CqfLcjM3TEbc8HhSVdcNjOvSk1SudvVLwKvQt =
  "https://images.pexels.com/photos/2888653/pexels-photo-2888653.jpeg?auto=compress&cs=tinysrgb&w=800";
const imgFoodBite =
  "https://images.pexels.com/photos/4109131/pexels-photo-4109131.jpeg?auto=compress&cs=tinysrgb&w=800";

function ContainerBackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">{children}</div>
    </div>
  );
}

function ImageBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[192px] relative shrink-0 w-[278px]">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">{children}</div>
    </div>
  );
}
type BackgroundBorderShadowBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundBorderShadowBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundBorderShadowBackgroundImageProps>) {
  return (
    <div className={clsx("absolute bg-white bottom-[32px] min-w-[280px] rounded-[16px] top-0", additionalClassNames)}>
      <div className="content-stretch flex flex-col h-full items-start min-w-[inherit] overflow-clip p-px relative rounded-[inherit]">{children}</div>
      <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.05)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}
type ContainerBackgroundImage3Props = {
  additionalClassNames?: string;
};

function ContainerBackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<ContainerBackgroundImage3Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">{children}</div>
    </div>
  );
}

function ContainerBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundBorderBackgroundImageProps = {
  additionalClassNames?: string;
};

function BackgroundBorderBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundBorderBackgroundImageProps>) {
  return (
    <div className={clsx("bg-white justify-self-stretch relative rounded-[16px] row-1 self-start shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center p-[25px] relative w-full">{children}</div>
      </div>
    </div>
  );
}

function ContainerBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[27px] relative shrink-0 w-[30px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 27">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}

function ContainerBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">{children}</g>
      </svg>
    </div>
  );
}
type ItemBackgroundImageAndTextProps = {
  text: string;
};

function ItemBackgroundImageAndText({ text }: ItemBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}
type HeadingBackgroundImageAndTextProps = {
  text: string;
};

function HeadingBackgroundImageAndText({ text }: HeadingBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}
type ContainerBackgroundImageAndTextProps = {
  text: string;
};

function ContainerBackgroundImageAndText({ text }: ContainerBackgroundImageAndTextProps) {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f5a623] text-[20px] w-[80.34px]">
        <p className="leading-[28px]">{text}</p>
      </div>
    </div>
  );
}
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="bg-[#3a1f0e] content-stretch flex items-center justify-center py-[8px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[83.22px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f8f7f6] relative size-full" data-name="Body">
      <div className="absolute content-stretch flex flex-col gap-[48px] items-start left-0 max-w-[1280px] px-[24px] py-[80px] right-0 top-[730px]" data-name="Section">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[36px] w-full">
              <p className="leading-[40px]">Why Food Bite?</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[16px] w-full">
              <p className="leading-[24px]">We ensure quality and speed in every single bite.</p>
            </div>
          </div>
        </div>
        <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[_206px] relative shrink-0 w-full" data-name="Container">
          <div className="bg-white col-1 h-[206px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
            <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="absolute h-[30px] left-[39px] top-[38px] w-[24px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 30">
                <path d={svgPaths.p3d855d90} fill="var(--fill-0, #F5A623)" id="Icon" />
              </svg>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[89px]" data-name="Heading 3">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[132.13px]">
                <p className="leading-[28px]">Fast Delivery</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[125px]" data-name="Container">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[48px] justify-center leading-[24px] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[278.81px]">
                <p className="mb-0">Delivered hot and fresh right to your</p>
                <p>doorstep within 30 minutes.</p>
              </div>
            </div>
          </div>
          <div className="bg-white col-2 h-[206px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
            <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="absolute h-[25.488px] left-[37.5px] top-[42.51px] w-[25.493px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4932 25.4885">
                <path d={svgPaths.p1e45c380} fill="var(--fill-0, #F5A623)" id="Icon" />
              </svg>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[89px]" data-name="Heading 3">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[173.92px]">
                <p className="leading-[28px]">Fresh Ingredients</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[33px] top-[125px]" data-name="Container">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[48px] justify-center leading-[24px] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[315.09px]">
                <p className="mb-0">Premium quality produce and 100% fresh</p>
                <p>meat every single day.</p>
              </div>
            </div>
          </div>
          <div className="bg-white col-3 h-[206px] justify-self-stretch relative rounded-[16px] row-1 shrink-0" data-name="Background+Border">
            <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.05)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            <div className="absolute h-[30px] left-[36px] top-[38px] w-[29.962px]" data-name="Icon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.9625 30">
                <path d={svgPaths.p31f49580} fill="var(--fill-0, #F5A623)" id="Icon" />
              </svg>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[32.99px] top-[89px]" data-name="Heading 3">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[20px] w-[114.38px]">
                <p className="leading-[28px]">Best Prices</p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col items-start left-[33px] right-[32.99px] top-[125px]" data-name="Container">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[48px] justify-center leading-[24px] not-italic relative shrink-0 text-[#64748b] text-[16px] w-[284.62px]">
                <p className="mb-0">Unbeatable value for money with</p>
                <p>portions that keep you coming back.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(58,31,14,0.05)] content-stretch flex flex-col gap-[32px] items-start left-0 py-[48px] right-0 top-[1216px]" data-name="Section">
        <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center max-w-[inherit] size-full">
            <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[24px] relative w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[24px] w-[170.22px]">
                  <p className="leading-[32px]">Popular Items</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[7.99px] items-start relative shrink-0" data-name="Container">
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  <ContainerBackgroundImage>
                    <path d={svgPaths.p3ed0080} fill="var(--fill-0, #0F172A)" id="Icon" />
                  </ContainerBackgroundImage>
                </div>
                <div className="bg-white content-stretch flex flex-col items-center justify-center p-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
                  <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
                  <ContainerBackgroundImage>
                    <path d={svgPaths.p28c84800} fill="var(--fill-0, #0F172A)" id="Icon" />
                  </ContainerBackgroundImage>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[370px] overflow-clip relative shrink-0 w-full" data-name="Container">
          <BackgroundBorderShadowBackgroundImage additionalClassNames="left-[24px]">
            <ImageBackgroundImage>
              <img alt="" className="absolute h-[144.79%] left-0 max-w-none top-[-22.4%] w-full" src={imgImage} />
            </ImageBackgroundImage>
            <ContainerBackgroundImage3 additionalClassNames="w-[155.94px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[123.94px]">
                  <p className="leading-[28px]">Zinger Burger</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f5a623] text-[20px] w-[81.2px]">
                  <p className="leading-[28px]">Rs. 449</p>
                </div>
              </div>
              <ButtonBackgroundImageAndText text="Add to Cart" />
            </ContainerBackgroundImage3>
          </BackgroundBorderShadowBackgroundImage>
          <BackgroundBorderShadowBackgroundImage additionalClassNames="left-[328px]">
            <ImageBackgroundImage>
              <img alt="" className="absolute h-[144.79%] left-0 max-w-none top-[-22.4%] w-full" src={imgImage1} />
            </ImageBackgroundImage>
            <ContainerBackgroundImage3 additionalClassNames="w-[137.2px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[105.2px]">
                  <p className="leading-[28px]">Fajita Pizza</p>
                </div>
              </div>
              <ContainerBackgroundImageAndText text="Rs. 599" />
              <ButtonBackgroundImageAndText text="Add to Cart" />
            </ContainerBackgroundImage3>
          </BackgroundBorderShadowBackgroundImage>
          <BackgroundBorderShadowBackgroundImage additionalClassNames="left-[632px]">
            <ImageBackgroundImage>
              <img alt="" className="absolute h-[144.79%] left-0 max-w-none top-[-22.4%] w-full" src={imgImage2} />
            </ImageBackgroundImage>
            <ContainerBackgroundImage3 additionalClassNames="w-[191.89px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[159.89px]">
                  <p className="leading-[28px]">Zinger Shawarma</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f5a623] text-[20px] w-[80.14px]">
                  <p className="leading-[28px]">Rs. 429</p>
                </div>
              </div>
              <ButtonBackgroundImageAndText text="Add to Cart" />
            </ContainerBackgroundImage3>
          </BackgroundBorderShadowBackgroundImage>
          <BackgroundBorderShadowBackgroundImage additionalClassNames="left-[936px]">
            <ImageBackgroundImage>
              <img alt="" className="absolute h-[144.79%] left-0 max-w-none top-[-22.4%] w-full" src={imgImage3} />
            </ImageBackgroundImage>
            <ContainerBackgroundImage3 additionalClassNames="w-[124.39px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[92.39px]">
                  <p className="leading-[28px]">BBQ Pizza</p>
                </div>
              </div>
              <ContainerBackgroundImageAndText text="Rs. 599" />
              <ButtonBackgroundImageAndText text="Add to Cart" />
            </ContainerBackgroundImage3>
          </BackgroundBorderShadowBackgroundImage>
          <BackgroundBorderShadowBackgroundImage additionalClassNames="left-[1240px]">
            <ImageBackgroundImage>
              <img alt="" className="absolute h-[144.79%] left-0 max-w-none top-[-22.4%] w-full" src={imgImage4} />
            </ImageBackgroundImage>
            <ContainerBackgroundImage3 additionalClassNames="w-[168.92px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[136.92px]">
                  <p className="leading-[28px]">Quarter Broast</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f5a623] text-[20px] w-[80.48px]">
                  <p className="leading-[28px]">Rs. 849</p>
                </div>
              </div>
              <ButtonBackgroundImageAndText text="Add to Cart" />
            </ContainerBackgroundImage3>
          </BackgroundBorderShadowBackgroundImage>
          <BackgroundBorderShadowBackgroundImage additionalClassNames="left-[1544px]">
            <ImageBackgroundImage>
              <img alt="" className="absolute h-[144.79%] left-0 max-w-none top-[-22.4%] w-full" src={imgImage5} />
            </ImageBackgroundImage>
            <ContainerBackgroundImage3 additionalClassNames="w-[185.98px]">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-[153.98px]">
                  <p className="leading-[28px]">Margherita Pizza</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pb-[12px] relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#f5a623] text-[20px] w-[80.95px]">
                  <p className="leading-[28px]">Rs. 499</p>
                </div>
              </div>
              <ButtonBackgroundImageAndText text="Add to Cart" />
            </ContainerBackgroundImage3>
          </BackgroundBorderShadowBackgroundImage>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 max-w-[1280px] px-[24px] py-[80px] right-0 top-[1756px]" data-name="Section">
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
          <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[32px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[24px] text-center w-[252.22px]">
            <p className="leading-[32px]">Browse by Category</p>
          </div>
        </div>
        <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(8,minmax(0,1fr))] grid-rows-[_118px] relative shrink-0 w-full" data-name="Container">
          <BackgroundBorderBackgroundImage additionalClassNames="col-1">
            <ContainerBackgroundImage1>
              <path d={svgPaths.p217e5f00} fill="var(--fill-0, #3A1F0E)" id="Icon" />
            </ContainerBackgroundImage1>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[55.16px]">
                <p className="leading-[20px]">Burgers</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
          <BackgroundBorderBackgroundImage additionalClassNames="col-2">
            <div className="h-[28.5px] relative shrink-0 w-[30px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28.5">
                <g id="Container">
                  <path d={svgPaths.p173c6000} fill="var(--fill-0, #3A1F0E)" id="Icon" />
                </g>
              </svg>
            </div>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[37.41px]">
                <p className="leading-[20px]">Pizza</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
          <BackgroundBorderBackgroundImage additionalClassNames="col-3">
            <div className="h-[30px] relative shrink-0 w-[22.5px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 30">
                <g id="Container">
                  <path d={svgPaths.p280a6f80} fill="var(--fill-0, #3A1F0E)" id="Icon" />
                </g>
              </svg>
            </div>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[47.5px]">
                <p className="leading-[20px]">Broast</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
          <BackgroundBorderBackgroundImage additionalClassNames="col-4">
            <div className="relative shrink-0 size-[27px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
                <g id="Container">
                  <path d={svgPaths.p275299c0} fill="var(--fill-0, #3A1F0E)" id="Icon" />
                </g>
              </svg>
            </div>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[75.59px]">
                <p className="leading-[20px]">Shawarma</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
          <BackgroundBorderBackgroundImage additionalClassNames="col-5">
            <ContainerBackgroundImage1>
              <path d={svgPaths.p2f554600} fill="var(--fill-0, #3A1F0E)" id="Icon" />
            </ContainerBackgroundImage1>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[40.97px]">
                <p className="leading-[20px]">Pasta</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
          <BackgroundBorderBackgroundImage additionalClassNames="col-6">
            <div className="relative shrink-0 size-[33px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
                <g id="Container">
                  <path d={svgPaths.p24841d00} fill="var(--fill-0, #3A1F0E)" id="Icon" />
                </g>
              </svg>
            </div>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[34.92px]">
                <p className="leading-[20px]">Fries</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
          <BackgroundBorderBackgroundImage additionalClassNames="col-7">
            <div className="h-[28.575px] relative shrink-0 w-[27px]" data-name="Container">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 28.575">
                <g id="Container">
                  <path d={svgPaths.p3933be00} fill="var(--fill-0, #3A1F0E)" id="Icon" />
                </g>
              </svg>
            </div>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[46.63px]">
                <p className="leading-[20px]">Wraps</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
          <BackgroundBorderBackgroundImage additionalClassNames="col-8">
            <ContainerBackgroundImage1>
              <path d={svgPaths.p3dde1700} fill="var(--fill-0, #3A1F0E)" id="Icon" />
            </ContainerBackgroundImage1>
            <ContainerBackgroundImage4>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] w-[86.16px]">
                <p className="leading-[20px]">Sandwiches</p>
              </div>
            </ContainerBackgroundImage4>
          </BackgroundBorderBackgroundImage>
        </div>
      </div>
      <div className="absolute bg-[#3a1f0e] content-stretch flex flex-col gap-[64px] items-start left-0 pb-[40px] pt-[64px] right-0 top-[2634px]" data-name="Footer">
        <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[_235px] max-w-[inherit] px-[24px] relative w-full">
            <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
              <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
                <div className="h-[56px] max-w-[272px] relative shrink-0 w-[96.72px]" data-name="Food Bite Logo">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgFoodBiteLogo} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] justify-center leading-[22.75px] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-full">
                  <p className="mb-0">Bringing the ultimate crunch to Wah</p>
                  <p className="mb-0">Cantonment. Quality ingredients, fast</p>
                  <p className="mb-0">delivery, and unbeatable taste since</p>
                  <p>2018.</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
                  <ContainerBackgroundImage2>
                    <path d={svgPaths.p2182f500} fill="var(--fill-0, white)" id="Icon" />
                  </ContainerBackgroundImage2>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
                  <ContainerBackgroundImage2>
                    <path d={svgPaths.p3d1fd080} fill="var(--fill-0, white)" id="Icon" />
                  </ContainerBackgroundImage2>
                </div>
                <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
                  <ContainerBackgroundImage2>
                    <path d={svgPaths.p1167b760} fill="var(--fill-0, white)" id="Icon" />
                  </ContainerBackgroundImage2>
                </div>
              </div>
            </div>
            <div className="col-2 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[55px] relative row-1 self-start shrink-0" data-name="Container">
              <HeadingBackgroundImageAndText text="Quick Links" />
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
                <ItemBackgroundImageAndText text="Menu" />
                <ItemBackgroundImageAndText text="Our Deals" />
                <ItemBackgroundImageAndText text="Track Order" />
                <ItemBackgroundImageAndText text="Store Locations" />
              </div>
            </div>
            <div className="col-3 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[71px] relative row-1 self-start shrink-0" data-name="Container">
              <HeadingBackgroundImageAndText text="Contact Us" />
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
                <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
                  <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Icon">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
                      <path d={svgPaths.p3d8f00c0} fill="var(--fill-0, #F5A623)" id="Icon" />
                    </svg>
                  </div>
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[181.33px]">
                    <p className="leading-[20px]">Main GT Rd, Wah, Pakistan</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
                  <div className="relative shrink-0 size-[10.5px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
                      <g id="Container">
                        <path d={svgPaths.p3d9b5d80} fill="var(--fill-0, #F5A623)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
                    <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[125.88px]">
                      <p className="leading-[20px]">+92 342 0564739</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
                  <div className="relative shrink-0 size-[11.667px]" data-name="Container">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                      <g id="Container">
                        <path d={svgPaths.p29478120} fill="var(--fill-0, #F5A623)" id="Icon" />
                      </g>
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-[102.89px]" data-name="Container">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#4ade80] text-[14px] w-[72.67px]">
                        <p className="leading-[20px]">Open Now</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                      <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[14px] w-[102.89px]">
                        <p className="leading-[20px]">Closes 1:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch pb-[23px] relative row-1 self-start shrink-0" data-name="Container">
              <HeadingBackgroundImageAndText text="Our Location" />
              <div className="content-stretch flex flex-col h-[160px] items-start justify-center opacity-80 overflow-clip relative rounded-[24px] shrink-0 w-full" data-name="Background">
                <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none rounded-[24px]" />
                <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Map location of Food Bite on Main GT Road Wah Pakistan">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[170%] left-0 max-w-none top-[-35%] w-full" src={imgMapLocationOfFoodBiteOnMainGtRoadWahPakistan} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] relative shrink-0 w-full" data-name="HorizontalBorder">
          <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
          <div className="content-stretch flex flex-col items-start max-w-[inherit] pt-[33px] px-[24px] relative w-full">
            <div className="relative shrink-0 w-full" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center w-[512.09px]">
                  <p className="leading-[16px]">© 2024 Food Bite Restaurant. All rights reserved. Designed for the crunch lovers of Wah.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex h-[600px] items-center justify-center left-0 overflow-clip right-0 top-[72px]" data-name="Section">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[213.33%] left-0 max-w-none top-[-56.67%] w-full" src={imgSection} />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.7)] inset-0 to-[rgba(0,0,0,0.5)]" />
        </div>
        <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative" data-name="Container">
          <div className="content-stretch flex flex-col items-start max-w-[inherit] px-[40px] relative w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] justify-center leading-[72px] not-italic relative shrink-0 text-[72px] text-white w-full">
                  <p className="mb-0">Taste the Crunch.</p>
                  <p className="text-[#f5a623]">Feel the Bite.</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[56px] justify-center leading-[28px] not-italic relative shrink-0 text-[#cbd5e1] text-[18px] w-[511.7px]">
                  <p className="mb-0">Experience the finest hand-crafted burgers, crispy broast,</p>
                  <p>and authentic stone-fired pizzas in Wah Cantt</p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
                <div className="bg-[#f5a623] content-stretch flex flex-col items-center justify-center pb-[18.5px] pt-[17.5px] px-[32px] relative rounded-[24px] shrink-0" data-name="Button">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[18px] text-center w-[97.8px]">
                    <p className="leading-[28px]">Order Now</p>
                  </div>
                </div>
                <div className="backdrop-blur-[2px] content-stretch flex flex-col items-center justify-center px-[34px] py-[18px] relative rounded-[24px] shrink-0" data-name="Button">
                  <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[97.69px]">
                    <p className="leading-[28px]">View Menu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#3a1f0e] h-[448px] left-[24px] overflow-clip right-[24px] rounded-[24px] top-[2106px]" data-name="Section">
        <div className="absolute inset-0 opacity-10" data-name="Gradient" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1232 448\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(159.71 0 0 58.077 -50717 -18443)\\'><stop stop-color=\\'rgba(255,255,255,0.2)\\' offset=\\'0.016071\\'/><stop stop-color=\\'rgba(255,255,255,0)\\' offset=\\'0.016071\\'/></radialGradient></defs></svg>')" }} />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[13px] items-start left-[80px] max-w-[576px] top-[calc(50%-2px)]" data-name="Container">
          <div className="bg-[rgba(245,166,35,0.2)] content-stretch flex items-start px-[16px] py-[3.5px] relative rounded-[9999px] shrink-0" data-name="Overlay">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#f5a623] text-[12px] tracking-[0.6px] uppercase w-[102.48px]">
              <p className="leading-[16px]">Limited Offer</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-white w-[494.27px]">
              <p className="leading-[48px]">Five Ka Fifteen Deal</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start pt-[3px] relative shrink-0 w-full" data-name="Container">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#cbd5e1] text-[18px] w-[530.38px]">
              <p className="leading-[28px]">Get 5 mouth-watering Zinger Burgers for an incredible price.</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[24px] items-center pt-[19px] relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 text-[#f5a623]" data-name="Paragraph">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] h-[20px] justify-center relative shrink-0 text-[14px] w-[38.17px]">
                <p className="leading-[20px]">ONLY</p>
              </div>
              <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[40px] justify-center relative shrink-0 text-[36px] w-[174.11px]">
                <p className="leading-[40px]">Rs. 2,100</p>
              </div>
            </div>
            <div className="bg-[#f5a623] content-stretch flex flex-col items-center justify-center px-[40px] py-[16px] relative rounded-[24px] shrink-0" data-name="Button">
              <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
              <div className="flex flex-col font-['Be_Vietnam_Pro:Black',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[18px] text-center w-[145.56px]">
                <p className="leading-[28px]">Claim Deal Now</p>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[816.15px] top-1/2" data-name="Container">
          <div className="flex items-center justify-center relative shrink-0 size-[351.696px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "22" } as React.CSSProperties}>
            <div className="flex-none rotate-6">
              <div className="relative shadow-[0px_25px_25px_0px_rgba(0,0,0,0.15)] size-[320px]" data-name="AB6AXuDsG1--ymw-QpxZ6WmR2F_RsZNiBHDVcS8KU3GTSH_LMDKaaD839dqYTRyTqLNv9V6lqdnbC0OkgSdNwI-6IMTnWrD0NnOcBv-u_KM0BJ5sd3l77RW9W6DVwkWdyvISPk3lRLwyXHq28vZ3VMzLngUXc9bndt9LRFupVIr1JH6TCyfS59pre3foyTMuBQVEZwnUgYvmybER9MYhR4DNmvA7f69lf89d-j5-CQFLcjM3tEbc8Hh--sVdcNjOVSk1sudvV-lwKvQt">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuDsG1YmwQpxZ6WmR2FRsZNiBhdVcS8Ku3GtshLmdKaaD839DqYtRyTqLNv9V6LqdnbC0OkgSdNwI6ImTnWrD0NnOcBvUKm0Bj5Sd3L77Rw9W6DVwkWdyvIsPk3LRLwyXHq28VZ3VMzLngUXc9Bndt9LrFupVIr1Jh6TCyfS59Pre3FoyTMuBqveZwnUgYvmybEr9MYhR4DNmvA7F69Lf89DJ5CqfLcjM3TEbc8HhSVdcNjOvSk1SudvVLwKvQt} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-between left-[16px] p-[25px] right-[16px] rounded-[16px] top-[632px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[rgba(58,31,14,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative">
            <div className="h-[40px] relative shrink-0 w-[46px]" data-name="Overlay">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 40">
                <g id="Overlay">
                  <rect fill="var(--fill-0, #F5A623)" fillOpacity="0.2" height="40" rx="20" width="46" />
                  <path d={svgPaths.p361bb1c0} fill="var(--fill-0, #3A1F0E)" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[303.63px]" data-name="Container">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[16px] w-[227.08px]">
                  <p className="leading-[24px]">Free Delivery on First Order!</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Regular',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[14px] w-[303.63px]">
                  <p className="leading-[20px]">Limited time offer for new customers in Wah.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0" data-name="Container">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
            <div className="content-stretch flex flex-col items-start px-[24px] relative shrink-0 w-[113.58px]" data-name="Container">
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center tracking-[1.2px] uppercase w-[53.94px]">
                  <p className="leading-[16px]">Rating</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[18px] text-center w-[65.58px]">
                  <p className="leading-[28px]">⭐ 4.7/5</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pl-[25px] pr-[24px] relative shrink-0" data-name="VerticalBorder">
              <div aria-hidden="true" className="absolute border-[rgba(58,31,14,0.1)] border-l border-solid inset-0 pointer-events-none" />
              <ContainerBackgroundImage5>
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center tracking-[1.2px] uppercase w-[65.45px]">
                  <p className="leading-[16px]">Reviews</p>
                </div>
              </ContainerBackgroundImage5>
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[10.38px] pr-[10.37px] relative">
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[18px] text-center w-[44.7px]">
                    <p className="leading-[28px]">100+</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start pl-[25px] pr-[24px] relative shrink-0" data-name="VerticalBorder">
              <div aria-hidden="true" className="absolute border-[rgba(58,31,14,0.1)] border-l border-solid inset-0 pointer-events-none" />
              <ContainerBackgroundImage5>
                <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#64748b] text-[12px] text-center tracking-[1.2px] uppercase w-[85.66px]">
                  <p className="leading-[16px]">Min. Order</p>
                </div>
              </ContainerBackgroundImage5>
              <div className="relative shrink-0" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[7.85px] pr-[7.86px] relative">
                  <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[18px] text-center w-[69.95px]">
                    <p className="leading-[28px]">Rs. 249</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#3a1f0e] relative rounded-[16px] shrink-0" data-name="Button">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative">
            <div className="flex flex-col font-['Be_Vietnam_Pro:Medium',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[74.55px]">
              <p className="leading-[20px]">Claim Now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#f5a623] content-stretch flex flex-col items-start left-0 px-[40px] py-[12px] right-0 top-0" data-name="Nav">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Nav:shadow" />
        <div className="content-stretch flex items-center justify-between max-w-[1280px] relative shrink-0 w-full" data-name="Container">
          <div className="h-[48px] relative shrink-0 w-[82.91px]" data-name="Food Bite">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFoodBite} />
            </div>
          </div>
          <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Container">
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[14px] w-[40.41px]">
                <p className="leading-[20px]">Home</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[14px] w-[37.53px]">
                <p className="leading-[20px]">Menu</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[14px] w-[43.63px]">
                <p className="leading-[20px]">About</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
              <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[#3a1f0e] text-[14px] w-[58.56px]">
                <p className="leading-[20px]">Contact</p>
              </div>
            </div>
          </div>
          <div className="bg-[#3a1f0e] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[16px] shrink-0" data-name="Button">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Button:shadow" />
            <div className="flex flex-col font-['Be_Vietnam_Pro:Bold',sans-serif] h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white w-[76.06px]">
              <p className="leading-[20px]">Order Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}