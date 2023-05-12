import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main() {
  const serverData = [
    { name: 'Data Science Hub', description: 'All things Data Science', faculty: 'Computing', year: 2023, semester: 2, rating: 4, importance: 'High', additionalInfo: 'Python and R are the main languages', usefulLinks: 'https://datascience.com' },
    { name: 'AI Enthusiasts', description: 'Dedicated to AI studies', faculty: 'Computing', year: 2023, semester: 2, rating: 5, importance: 'Very High', additionalInfo: 'TensorFlow and PyTorch preferred', usefulLinks: 'https://ai.google.com' },
    { name: 'Web Dev Masters', description: 'Web Development Tips & Tricks', faculty: 'Computing', year: 2023, semester: 2, rating: 4, importance: 'Medium', additionalInfo: 'JavaScript, React and Node.js', usefulLinks: 'https://developer.mozilla.org' },
    { name: 'Cybersecurity 101', description: 'Learn cybersecurity basics', faculty: 'Computing', year: 2023, semester: 2, rating: 5, importance: 'High', additionalInfo: 'Encryption, Networking, Firewalls', usefulLinks: 'https://cybersecurity.gov' },
    { name: 'Quantum Computing', description: 'Quantum Computing Basics', faculty: 'Physics', year: 2023, semester: 2, rating: 4, importance: 'Medium', additionalInfo: 'Quantum Mechanics and Computation', usefulLinks: 'https://quantumcomputing.ibm.com/' },
    { name: 'Organic Chemistry', description: 'Study group for Organic Chemistry', faculty: 'Chemistry', year: 2023, semester: 2, rating: 3, importance: 'Medium', additionalInfo: 'Focus on Reactions and Mechanisms', usefulLinks: 'https://www.organic-chemistry.org/' },
    { name: 'Astrophysics Realm', description: 'All about Astrophysics', faculty: 'Physics', year: 2023, semester: 2, rating: 4, importance: 'High', additionalInfo: 'Space, Stars, Galaxies', usefulLinks: 'https://www.nasa.gov/' },
    { name: 'Bioinformatics', description: 'Bioinformatics Study Group', faculty: 'Biology', year: 2023, semester: 2, rating: 5, importance: 'High', additionalInfo: 'Python and BioPython are used', usefulLinks: 'https://www.ncbi.nlm.nih.gov/' },
    { name: 'Philosophy Club', description: 'Philosophy Discussion Group', faculty: 'Arts', year: 2023, semester: 2, rating: 3, importance: 'Low', additionalInfo: 'Metaphysics, Ethics, Epistemology', usefulLinks: 'https://plato.stanford.edu/' },
    { name: 'Economics 101', description: 'Economics Study Group', faculty: 'Business', year: 2023, semester: 2, rating: 4, importance: 'Medium', additionalInfo: 'Microeconomics, Macroeconomics', usefulLinks: 'https://www.economicsonline.co.uk/' },
  ]
  // Add more servers as required

  for (const server of serverData) {
    await prisma.server.create({
      data: server,
    })
  }

  console.log(`${serverData.length} servers created.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect()
  })
