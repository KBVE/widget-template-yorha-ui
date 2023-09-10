import tw, { styled } from "twin.macro";

export const StyledApp = styled.div`
  ${tw`min-w-[300px] max-w-[600px] p-4 shadow-md bg-[#D1CDB7] rounded-3xl overflow-x-hidden overflow-y-hidden`}
`;

export const GradientBar = styled.div`.content {
    padding-left: 4rem;
    background-image: linear-gradient(90deg, rgba($color, .2), rgba($color, .2) 14px, 
      transparent 14px, transparent 20px,
      rgba($color, .2) 20px, rgba($color, .2) 23px, transparent 23px);
    margin-bottom: 2rem;
  }`