// task_5/js/main.ts

// Define MajorCredits interface with nominal typing using branding
interface MajorCredits {
  credits: number;
  _brand: 'major'; // Nominal typing brand
}

// Define MinorCredits interface with nominal typing using branding
interface MinorCredits {
  credits: number;
  _brand: 'minor'; // Nominal typing brand
}

// Function to sum major credits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'major'
  };
}

// Function to sum minor credits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'minor'
  };
}


const major1: MajorCredits = { credits: 3, _brand: 'major' };
const major2: MajorCredits = { credits: 4, _brand: 'major' };

console.log(sumMajorCredits(major1, major2)); // { credits: 7, _brand: 'major' }