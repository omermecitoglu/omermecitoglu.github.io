import { getDocuments } from "./firebase";

export type PortfolioProject = {
  id: string,
  thumbnail: string,
  thumbnailStyle: "cover" | "contain",
  title: string,
  description: string,
  url: string,
  cta: string,
};

export async function getPortfolio() {
  const documents = await getDocuments("portfolio");
  if (!documents) return [];
  const cityList = documents.map<PortfolioProject>(doc => ({
    ...doc.data() as PortfolioProject,
    id: doc.id,
  }));
  return cityList;
}
