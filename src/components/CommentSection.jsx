import React, { useState, useEffect } from "react";
import { Send, Trash2 } from "lucide-react";

const CommentSection = ({ insightId }) => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Load comments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem(`insight_comments_${insightId}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setComments(parsed);
      } catch (e) {
        console.error("Error loading comments:", e);
      }
    }
  }, [insightId]);

  // Save comments to localStorage
  const saveComments = (newComments) => {
    localStorage.setItem(`insight_comments_${insightId}`, JSON.stringify(newComments));
    setComments(newComments);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!comment.trim()) return;

    setSubmitting(true);

    const newComment = {
      id: Date.now().toString(),
      name: name.trim() || "Anonym",
      comment: comment.trim(),
      date: new Date().toISOString()
    };

    const updated = [newComment, ...comments];
    saveComments(updated);

    // Reset form
    setName("");
    setComment("");
    setSubmitting(false);
  };

  const handleDelete = (commentId) => {
    if (!window.confirm("Möchten Sie diesen Kommentar wirklich löschen?")) return;

    const updated = comments.filter(comment => comment.id !== commentId);
    saveComments(updated);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "gerade eben";
    if (diffMins < 60) return `vor ${diffMins} ${diffMins === 1 ? "Minute" : "Minuten"}`;
    if (diffHours < 24) return `vor ${diffHours} ${diffHours === 1 ? "Stunde" : "Stunden"}`;
    if (diffDays < 7) return `vor ${diffDays} ${diffDays === 1 ? "Tag" : "Tagen"}`;
    
    return date.toLocaleDateString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-titanium-200 bg-white">
      <div className="container-max max-w-4xl px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-graphite-900 mb-6 md:mb-8 font-sans tracking-tight">
          Kommentare
        </h2>

        {/* Comment Form */}
        <form
          onSubmit={handleSubmit}
          className="mb-8 md:mb-12"
        >
          <div className="card p-4 md:p-6">
            <div className="space-y-3 md:space-y-4">
              <div>
                <label htmlFor="comment-name" className="block text-xs md:text-sm font-medium text-graphite-700 mb-1.5 md:mb-2 font-sans">
                  Name <span className="text-graphite-400 font-normal">(optional)</span>
                </label>
                <input
                  id="comment-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ihr Name"
                  className="w-full rounded-xl px-4 py-3 bg-white border border-titanium-300 focus:outline-none focus:border-graphite-700 focus:ring-2 focus:ring-graphite-700/20 text-sm md:text-base font-sans transition-colors"
                />
              </div>

              <div>
                <label htmlFor="comment-text" className="block text-xs md:text-sm font-medium text-graphite-700 mb-1.5 md:mb-2 font-sans">
                  Kommentar
                </label>
                <textarea
                  id="comment-text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Ihre Gedanken..."
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 bg-white border border-titanium-300 focus:outline-none focus:border-graphite-700 focus:ring-2 focus:ring-graphite-700/20 resize-none text-sm md:text-base font-sans transition-colors"
                  required
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={submitting || !comment.trim()}
                  className="inline-flex items-center gap-2 rounded-xl px-4 md:px-5 py-2 md:py-3 font-semibold text-white bg-gradient-to-r from-graphite-700 to-graphite-800 hover:from-graphite-800 hover:to-graphite-900 shadow-[0_8px_20px_rgba(43,53,66,0.35)] disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base font-sans transition-all"
                >
                  <Send size={16} />
                  <span>{submitting ? "Wird gesendet..." : "Kommentar posten"}</span>
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-4 md:space-y-5">
          {comments.length === 0 ? (
              <div className="text-center py-8 md:py-12 text-graphite-500 font-sans text-sm md:text-base">
                <p>Noch keine Kommentare. Seien Sie der Erste!</p>
              </div>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="card p-4 md:p-5"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-titanium-600 to-graphite-700 flex items-center justify-center text-white font-semibold text-sm md:text-base">
                      {comment.name.charAt(0).toUpperCase()}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                        <h3 className="font-semibold text-graphite-900 text-sm md:text-base font-sans">{comment.name}</h3>
                        <span className="text-xs text-graphite-500">•</span>
                        <time className="text-xs text-graphite-500 font-sans">{formatDate(comment.date)}</time>
                      </div>
                      <p className="text-graphite-700 leading-relaxed whitespace-pre-wrap text-sm md:text-base font-sans mb-3">
                        {comment.comment}
                      </p>

                      {/* Delete Button */}
                      <button
                        onClick={() => handleDelete(comment.id)}
                        className="flex items-center gap-1.5 text-xs md:text-sm text-graphite-600 hover:text-graphite-800 transition-colors font-sans"
                      >
                        <Trash2 size={14} />
                        <span>Löschen</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </section>
  );
};

export default CommentSection;
