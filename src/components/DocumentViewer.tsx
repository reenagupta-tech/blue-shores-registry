import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Download, Calendar, User, Eye } from "lucide-react";

// Dummy document data
const dummyDocuments = [
  {
    id: 1,
    title: "Environmental Impact Assessment",
    type: "PDF",
    size: "2.4 MB",
    uploadDate: "2024-01-15",
    author: "Dr. Maya Singh",
    description: "Comprehensive assessment of mangrove plantation environmental impact and carbon sequestration potential.",
    ngo: "Green Earth Foundation",
    category: "Assessment",
    status: "Approved",
    url: "#" // In real app, this would be the actual document URL
  },
  {
    id: 2,
    title: "Site Monitoring Report Q1 2024",
    type: "PDF",
    size: "1.8 MB",
    uploadDate: "2024-03-31",
    author: "Raj Patel",
    description: "Quarterly monitoring report detailing growth progress, survival rates, and carbon capture measurements.",
    ngo: "Coastal Care Initiative",
    category: "Report",
    status: "Under Review",
    url: "#"
  },
  {
    id: 3,
    title: "Community Engagement Plan",
    type: "DOCX",
    size: "985 KB",
    uploadDate: "2024-02-20",
    author: "Anita Sharma",
    description: "Detailed plan for local community involvement in salt marsh restoration activities.",
    ngo: "Blue Ocean Conservancy",
    category: "Planning",
    status: "Approved",
    url: "#"
  },
  {
    id: 4,
    title: "Carbon Credit Verification Certificate",
    type: "PDF",
    size: "456 KB",
    uploadDate: "2024-04-10",
    author: "Third-party Verifier",
    description: "Official verification certificate for carbon credits generated through marine sanctuary restoration.",
    ngo: "Wetland Warriors",
    category: "Certificate",
    status: "Verified",
    url: "#"
  },
  {
    id: 5,
    title: "Biodiversity Survey Results",
    type: "XLSX",
    size: "3.2 MB",
    uploadDate: "2024-03-15",
    author: "Dr. Suresh Kumar",
    description: "Comprehensive biodiversity survey data from restored coastal buffer zones.",
    ngo: "Coastal Guardians",
    category: "Survey",
    status: "Approved",
    url: "#"
  },
  {
    id: 6,
    title: "Financial Audit Report 2024",
    type: "PDF",
    size: "1.1 MB",
    uploadDate: "2024-04-05",
    author: "Independent Auditor",
    description: "Annual financial audit report showing fund allocation and project expenditure transparency.",
    ngo: "Green Earth Foundation",
    category: "Audit",
    status: "Approved",
    url: "#"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
    case "Verified":
      return "bg-success/10 text-success border-success/20";
    case "Under Review":
      return "bg-warning/10 text-warning border-warning/20";
    case "Rejected":
      return "bg-destructive/10 text-destructive border-destructive/20";
    default:
      return "bg-muted/10 text-muted-foreground border-muted/20";
  }
};

const getFileIcon = (type: string) => {
  return <FileText className="h-4 w-4" />;
};

interface DocumentViewerProps {
  requestId?: number;
  maxDocuments?: number;
}

export function DocumentViewer({ requestId, maxDocuments }: DocumentViewerProps) {
  const [selectedDocument, setSelectedDocument] = useState<typeof dummyDocuments[0] | null>(null);
  
  // Filter or limit documents based on props
  const documents = maxDocuments ? dummyDocuments.slice(0, maxDocuments) : dummyDocuments;

  return (
    <>
      <div className="space-y-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {getFileIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold mb-1">{doc.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{doc.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {doc.author}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(doc.uploadDate).toLocaleDateString()}
                      </span>
                      <span>{doc.type} • {doc.size}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(doc.status)} variant="outline">
                    {doc.status}
                  </Badge>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedDocument(doc)}
                      >
                        <Eye className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                  <Button variant="outline" size="sm">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Document Detail Modal */}
      {selectedDocument && (
        <Dialog open={!!selectedDocument} onOpenChange={() => setSelectedDocument(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center space-x-2">
                {getFileIcon(selectedDocument.type)}
                <span>{selectedDocument.title}</span>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Type:</span>
                  <span className="ml-2">{selectedDocument.type}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Size:</span>
                  <span className="ml-2">{selectedDocument.size}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Author:</span>
                  <span className="ml-2">{selectedDocument.author}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Upload Date:</span>
                  <span className="ml-2">{new Date(selectedDocument.uploadDate).toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">NGO:</span>
                  <span className="ml-2">{selectedDocument.ngo}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Category:</span>
                  <span className="ml-2">{selectedDocument.category}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{selectedDocument.description}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <Badge className={getStatusColor(selectedDocument.status)} variant="outline">
                  {selectedDocument.status}
                </Badge>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button size="sm">
                    View Full Document
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}